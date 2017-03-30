import audio from '../utils/audio';
import createAction from '../utils/create-action';
import randomMove from '../utils/get-random-music-button';
import shuffle from '../utils/shuffle-array';
import {
  buttonIds,
  CPU_MOVE_DURATION,
  ERROR_MOVE_DURATION,
  NEXT_SEQUENCE_DELAY,
  NEXT_SEQUENCE_MOVE_DELAY,
  USER_MOVE_FADE_DURATION } from '../constants';

export const CHANGE_BUTTON_COLORS = 'CHANGE_BUTTON_COLORS';
export const CHANGE_GAME_MODE = 'CHANGE_GAME_MODE';
export const CHANGE_GAME_SPEED = 'CHANGE_GAME_SPEED';
export const END_GAME = 'END_GAME';
export const END_SEQUENCE = 'END_SEQUENCE';
export const START_GAME = 'START_GAME';
export const START_SEQUENCE = 'START_SEQUENCE';
export const TOGGLE_STRICT_MODE = 'TOGGLE_STRICT_MODE';
export const UPDATE_GAME_SCORE = 'UPDATE_GAME_SCORE';
export const UPDATE_PLAYER_MOVES = 'UPDATE_PLAYER_MOVES';
export const NEW_MOVE = 'NEW_MOVE';
export const TOGGLE_MAX_MOVES = 'TOGGLE_MAX_MOVES';
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const CPU_MUSIC_BUTTON_OFF = 'CPU_MUSIC_BUTTON_OFF';
export const CPU_MUSIC_BUTTON_ON = 'CPU_MUSIC_BUTTON_ON';
export const MUSIC_BUTTON_ERROR = 'MUSIC_BUTTON_ERROR';
export const MUSIC_BUTTON_OFF = 'MUSIC_BUTTON_OFF';
export const MUSIC_BUTTON_ON = 'MUSIC_BUTTON_ON';

export const endGame = createAction(END_GAME);
export const endSequence = createAction(END_SEQUENCE);
export const startSequence = createAction(START_SEQUENCE);
export const toggleMaxMoves = createAction(TOGGLE_MAX_MOVES);
export const toggleSound = createAction(TOGGLE_SOUND);
export const toggleStrictMode = createAction(TOGGLE_STRICT_MODE);

const changeButtonColors = createAction(CHANGE_BUTTON_COLORS);
const changeGameMode = createAction(CHANGE_GAME_MODE);
const changeGameSpeed = createAction(CHANGE_GAME_SPEED);
const cpuMusicButtonOff = createAction(CPU_MUSIC_BUTTON_OFF);
const cpuMusicButtonOn = createAction(CPU_MUSIC_BUTTON_ON);
const musicButtonError = createAction(MUSIC_BUTTON_ERROR);
const musicButtonOff = createAction(MUSIC_BUTTON_OFF);
const musicButtonOn = createAction(MUSIC_BUTTON_ON);
const updateGameScore = createAction(UPDATE_GAME_SCORE);
const updatePlayerMoves = createAction(UPDATE_PLAYER_MOVES);

export const newMove = () => ({ type: NEW_MOVE, payload: randomMove() });

// Thunks

let sound;
let soundGain;

export const leaveGame = () => (dispatch, getstate) => {
  const state = getstate();
  const gameMode = state.game.mode;
  const playing = state.game.playing;
  const soundEnabled = state.game.sound;

  if (playing) {
    dispatch(endSequence());
    if (soundEnabled) sound.disconnect(soundGain);
  }
  if (gameMode === 'surprise') dispatch(changeButtonColors(buttonIds));
  dispatch(endGame());
};

const playMoves = (currentGame, time, dispatch, getState) => {
  const state = getState();
  const buttonColors = state.simonButtons.buttonColors;
  const gameMode = state.game.mode;
  const playing = state.game.playing;
  const soundEnabled = state.game.sound;
  const move = currentGame.shift();
  const onPlayMoveEnded = () => {
    dispatch(cpuMusicButtonOff(move));

    if (playing && currentGame.length) {
      setTimeout(
        () => playMoves(currentGame, time, dispatch, getState),
        NEXT_SEQUENCE_MOVE_DELAY * 1000,
      );
    } else {
      // colors of buttons must change every turn in 'surprise' mode
      if (gameMode === 'surprise') dispatch(changeButtonColors(shuffle(buttonColors)));
      dispatch(endSequence());
    }
  };

  dispatch(cpuMusicButtonOn(move));

  if (soundEnabled) { // Only play sound if sound is enabled, so obvious
    const gain = audio[move].start();
    const oscillator = audio[move].stop(gain, time);
    sound = oscillator;
    soundGain = gain;
    oscillator.onended = onPlayMoveEnded;
  } else {
    setTimeout(onPlayMoveEnded, time * 1000);
  }
};

const playSequence = () => (dispatch, getState) => {
  const currentGame = getState().moves.currentGame;

  dispatch(startSequence());
  setTimeout(() => playMoves(
    [...currentGame], CPU_MOVE_DURATION, dispatch, getState), NEXT_SEQUENCE_DELAY * 1000);
};

export const startGame = () => (dispatch) => {
  dispatch({ type: START_GAME });
  dispatch(newMove());
  dispatch(playSequence());
};

let gain;

export const playButtonSound = id => (dispatch, getState) => {
  const soundEnabled = getState().game.sound;

  dispatch(musicButtonOn(id));
  if (!soundEnabled) return;

  gain = audio[id].start();
};

export const stopButtonSound = (active, id) => (dispatch, getState) => {
  const state = getState();
  const soundEnabled = state.game.sound;

  if (active) {
    dispatch(musicButtonOff(id));
    if (soundEnabled) audio[id].stop(gain, USER_MOVE_FADE_DURATION);

    const playerMoves = state.moves.player.length;
    const lastMove = playerMoves === state.moves.maxMoves;

    if (playerMoves === state.moves.currentGame.length) {
      if (!lastMove) {
        dispatch(updateGameScore());
        dispatch(newMove());
        dispatch(playSequence());
      } else {
        dispatch(endSequence());
        dispatch(endGame());
      }
    }
  }
};

const handleSimonButtonError = (id, strict) => (dispatch, getState) => {
  const soundEnabled = getState().game.sound;
  const onPlayErrorEnded = () => {
    dispatch(endSequence());
    if (strict) {
      dispatch(endGame());
    } else {
      dispatch(playSequence());
    }
  };

  dispatch(musicButtonError(id));

  if (!soundEnabled) {
    setTimeout(onPlayErrorEnded, ERROR_MOVE_DURATION * 1000);
  } else {
    audio[id].playError(onPlayErrorEnded);
  }
};

export const handleSimonButton = id => (dispatch, getState) => {
  const state = getState();
  const currentGame = state.moves.currentGame;
  const gameMode = state.game.mode;
  const playerGame = state.moves.player;

  // In game mode 'rewind', the user has to replay the sequence backwards
  // Its better to just alter the comparation order than have to change the
  // implementation deeply, being forced to pass more data in the action
  // (full player array, after processing it in a thunk, for having different
  // values according to the current game mode)
  const userProgress = (gameMode !== 'rewind') ? playerGame.length : currentGame.length - playerGame.length - 1;

  if (id === currentGame[userProgress]) {
    dispatch(updatePlayerMoves(id));
    dispatch(playButtonSound(id));
  } else {
    dispatch(handleSimonButtonError(id, state.game.strict));
  }
};

export const handleChangeGameSpeed = event => (dispatch) => {
  dispatch(changeGameSpeed(event.target.value));
};
export const handleChangeGameMode = event => (dispatch, getState) => {
  const gameMode = event.target.value;
  dispatch(changeGameMode(gameMode));
  if (gameMode === 'listen') {
    const soundEnabled = getState().game.sound;
    if (!soundEnabled) dispatch(toggleSound());
  }
};
