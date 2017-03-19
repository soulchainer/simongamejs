import audio from '../utils/audio';
import createAction from '../utils/create-action';
import randomTone from '../utils/get-random-music-button';

export const END_GAME = 'END_GAME';
export const END_SEQUENCE = 'END_SEQUENCE';
export const START_GAME = 'START_GAME';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const START_SEQUENCE = 'START_SEQUENCE';
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const UPDATE_GAME_SPEED = 'UPDATE_GAME_SPEED';
export const TOGGLE_STRICT_MODE = 'TOGGLE_STRICT_MODE';

export const UPDATE_PLAYER_TONES = 'UPDATE_PLAYER_TONES';
export const NEW_TONE = 'NEW_TONE';
export const SET_MAX_TONES = 'SET_MAX_TONES';

export const MUSIC_BUTTON_ON = 'MUSIC_BUTTON_ON';
export const MUSIC_BUTTON_OFF = 'MUSIC_BUTTON_OFF';
export const MUSIC_BUTTON_ERROR = 'MUSIC_BUTTON_ERROR';

export const newTone = () => ({ type: NEW_TONE, payload: randomTone() });

export const endGame = createAction(END_GAME);
export const endSequence = createAction(END_SEQUENCE);
export const setGameMode = createAction(SET_GAME_MODE);
export const startSequence = createAction(START_SEQUENCE);
export const toggleSound = createAction(TOGGLE_SOUND);
export const updateGameSpeed = createAction(UPDATE_GAME_SPEED);
export const toggleStrictMode = createAction(TOGGLE_STRICT_MODE);
export const updatePlayerTones = createAction(UPDATE_PLAYER_TONES);
export const setMaxTones = createAction(SET_MAX_TONES);

const musicButtonOn = createAction(MUSIC_BUTTON_ON);
const musicButtonOff = createAction(MUSIC_BUTTON_OFF);
const musicButtonError = createAction(MUSIC_BUTTON_ERROR);

// Thunks

export const startGame = () => (dispatch) => {
  dispatch({ type: START_GAME });
  dispatch(newTone());
};

let gain;

export const playButtonSound = id => (dispatch) => {
  dispatch(musicButtonOn(id));
  gain = audio[id].start();
};

export const stopButtonSound = (active, id) => (dispatch, getState) => {
  const state = getState();

  if (active) {
    dispatch(musicButtonOff(id));
    audio[id].stop(gain);

    const playerTones = state.tones.player.length;
    const lastTone = playerTones === state.tones.max;
    if (playerTones === state.tones.currentGame.length) {
      if (!lastTone) {
        dispatch(newTone());
        dispatch(startSequence());
      } else {
        dispatch(endGame());
      }
    }
  }
};

export const handleSimonButton = id => (dispatch, getState) => {
  const state = getState();

  if (id === state.tones.currentGame[state.tones.player.length]) {
    dispatch(updatePlayerTones(id));
    dispatch(playButtonSound(id));
  } else {
    // disable click/touch in Simon, avoids mix of sounds
    // evitar que se clique si está ya reproduciéndose mensaje de error
    dispatch(musicButtonError({ id, strict: state.game.strict }));
    audio[id].playError();
  }
};
