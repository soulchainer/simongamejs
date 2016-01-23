(function(){
  // all the logic of the game
  var simon = function() {
    // get the music buttons
    var musicBtns = [];
    for (let i of [0,1,2,3]) {
      musicBtns[i] = document.getElementById("tap"+i);
    }
    // create and load the sounds
    var assetPath = "/assets/audio/";
    var sounds = [
      {id: "0", src: "tap0.ogg"},
      {id: "1", src: "tap1.ogg"},
      {id: "2", src: "tap2.ogg"},
      {id: "3", src: "tap3.ogg"}
    ];
    var cs = createjs.Sound;
    cs.alternateExtensions = ["mp3"];
    cs.on("fileload", onSoundLoaded);
    cs.registerSounds(sounds, assetPath);
    var snds = [];
    // get the option/action buttons
    var powerBtn = document.getElementById('power');
    var startBtn = document.getElementById('start');
    var strictBtn = document.getElementById('strict');
    var modesBtn = document.getElementById('modes');
    // get the elements of the page, for show/change info
    var  led = document.getElementById('led');
    var modeLabel = document.getElementById('mode-label');
    var strictLabel = document.getElementById('strict-label');
    var status = document.getElementById('status');

    // game modes available: «Normal» (20 moves to win) and «No limit»
    // (play till you want)
    var modes = ["Normal", "No limit"];
    powerBtn.addEventListener('click', togglePower);
    var self = this;
    // reference to the interval used by the cpu for play the tap series
    // needed to stop the playing in any moment
    this.cpuInterval = null;
    this.on = false; // Is the Simon device turned on?
    this.mode = 0;  // actual mode game (index of «modes» array)
    this.strict = false;  // additive mode: after an user mistake, game resets
    this.started = false; // is the game started?
    this.turn = 0;  // turn being played
    this.turns = getTurns();  // total turns of the game
    this.start = function() {  // start the game, when pressed «start»
      modesBtn.removeEventListener('click', processFunctionButton);
      self.started = true;
      self.cpuTurn();
    };
    this.taps = [];  // storage of the moves played
    this.currentPlayerTap = null;  // last music button pressed by the user
    this.playerMiss = false;  // the user has made a mistake
    this.cpuTurn = function() {  // process the cpu turn
      self.turn++;
      if (!self.gameEnded()) {
        status.textContent = "CPU turn";
        if (!self.playerMiss || !self.taps.length) {
          self.taps.push(getRandomTap());
          updateLed(self.turn);
        }
        self.playerMiss = false;
        var tap = 0;
        musicBtns.forEach(disableMusicBtns);
        // interval that plays the actual serie of buttons
        self.cpuInterval = window.setInterval(play, 600, self.cpuInterval);
      } else {
        status.textContent = "YOU WIN!!";
        return;
      }
      function play() {  // play a music button
        snds[self.taps[tap]].play();
        tap++;
        if ((tap >= self.turn)) {
          window.clearInterval(self.cpuInterval);
          self.cpuInterval = null;
          window.setTimeout(self.playerTurn, 400);
        }
      }
    };
    this.playerTurn = function() {  // process the player turn
      status.textContent = "Your turn";
      musicBtns.forEach(enableMusicBtns);
      var taps = self.turn;
      self.currentPlayerTap = 0;
      for (let btn of musicBtns) {
        btn.addEventListener('click', processMusicTap);
      }
    };
    this.gameEnded = function() {  // return true if game ends, false otherwise
      return (self.turn > self.turns);
    };

    // helper functions
    function playingMusicButton(e) {  // what to do when music of button starts
      function playing() {
        e.classList.add('pushed');
      }
      return playing;
    }
    function unpressButton(e) {  // what to do when music of button ends
      function unpressed() {
        e.classList.remove('pushed');
      }
      return unpressed;
    }
    function unpressed(e) {
      e.classList.remove('pushed');
    }
    function onSoundLoaded(e) {  // run when all sounds are ready
      var id = e.id;
      snds[id] = cs.createInstance(id);
      var snd = snds[id];
      snd.on("succeeded", playingMusicButton(musicBtns[id]));
      snd.on("complete", unpressButton(musicBtns[id]));
    }
    function getTurns() {  // return total turns to play, according to game mode
      return (self.mode === 0)? 20: Infinity;
    }
    function getRandomTap() {  // return random button to tap next (number 0-3)
        return String(Math.floor(Math.random()*4));
    }
    function processFunctionButton(e) {  // execute action related to pushed btn
      switch (e.target.id) {
        case 'start':
          if (self.started) {
            resetGame();
          } else {
            self.start();
          }
          break;
        case 'strict':
          if (self.strict) {
            self.strict = false;
            strictBtn.classList.remove('pushed');
            strictLabel.textContent= "";
          } else {
            self.strict = true;
            strictBtn.classList.add('pushed');
            strictLabel.textContent= "(Strict)";
          }
          break;
        default:
          self.mode = (self.mode === modes.length - 1)? 0: self.mode + 1;
          modeLabel.textContent = modes[self.mode];
          self.turns = getTurns();
      }
    }
    function enableMusicBtns(e) {  // enable music buttons (could be clicked)
      if (e.hasAttribute('disabled')) {
        e.removeAttribute('disabled');
      }
    }
    function disableMusicBtns(e) {  // disable music buttons
      if (!e.hasAttribute('disabled')) {
        e.setAttribute('disabled','true');
      }
    }
    function togglePower(e){  // toggle power button ON/OFF
      self.on = (self.on)? false: true;
      if (self.on) {
        status.textContent = "On";
        powerBtn.classList.add('right');
        for (let btn of [startBtn, strictBtn, modesBtn]) {
          btn.addEventListener('click', processFunctionButton);
        }
      } else {
        status.textContent = "Off";
        powerBtn.classList.remove('right');
        stopGame();
      }
    }
    function musicTapError() {  // what to do when user make a mistake
      status.textContent = "YOU MISS!!";
      if (self.strict) {
        resetGame();
      } else {
        self.playerMiss = true;
        self.turn--;
        window.setTimeout(self.cpuTurn, 200);
      }
    }
    function processMusicTap(e) {  // process the tap of a music button
      var tapped = e.target.getAttribute("data-btn");
      var snd = snds[tapped];
      snd.play();
      snd.on('complete', function(){
        if (tapped === self.taps[self.currentPlayerTap]) {
          self.currentPlayerTap++;
          if (self.currentPlayerTap === self.turn) {
            for (let btn of musicBtns) {
              btn.removeEventListener('click', processMusicTap);
            }
            window.setTimeout(self.cpuTurn, 200);
          }
        } else {
          for (let btn of musicBtns) {
            btn.removeEventListener('click', processMusicTap);
          }
          musicTapError();
        }
      }, null, true);
    }
    function updateLed(value="--") {  // update the led value
      led.textContent = value;
    }
    function baseReset(){  // prepare the device for a reset (or power off)
      window.clearInterval(self.cpuInterval);
      self.cpuInterval = null;
      cs.stop();
      musicBtns.forEach(unpressed);
      // remove music buttons listeners on reset, to avoid duplicity
      for (let btn of musicBtns) {
        btn.removeEventListener('click', processMusicTap);
      }
      updateLed();
      self.turn = 0;
      self.taps = [];
      self.currentPlayerTap = null;
      self.playerMiss = false;
    }
    function stopGame() {  // stop (and power off) the device
      baseReset();
      for (let btn of [startBtn, strictBtn]) {
        btn.removeEventListener('click', processFunctionButton);
      }
      self.on = false;
      self.started = false;
      modesBtn.addEventListener('click', processFunctionButton);
    }
    function resetGame() {  // restart the game, with a new sequence of sounds
      baseReset();
      self.on = true;
      self.start();
    }
  };

  // launch the game
  var simonGame = new simon();
})();
