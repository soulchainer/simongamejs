import audio from '../utils/audio';
import createAction from '../utils/create-action';
import randomTone from '../utils/get-random-music-button';
import {
  CPU_TONE_DURATION,
  NEXT_SEQUENCE_DELAY,
  NEXT_SEQUENCE_TONE_DELAY,
  USER_TONE_FADE_DURATION } from '../constants';

export const END_GAME = 'END_GAME';
export const END_SEQUENCE = 'END_SEQUENCE';
export const START_GAME = 'START_GAME';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const START_SEQUENCE = 'START_SEQUENCE';
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const UPDATE_GAME_SPEED = 'UPDATE_GAME_SPEED';
export const TOGGLE_STRICT_MODE = 'TOGGLE_STRICT_MODE';

export const UPDATE_GAME_SCORE = 'UPDATE_GAME_SCORE';
export const UPDATE_PLAYER_TONES = 'UPDATE_PLAYER_TONES';
export const NEW_TONE = 'NEW_TONE';
export const SET_MAX_TONES = 'SET_MAX_TONES';

export const MUSIC_BUTTON_ON = 'MUSIC_BUTTON_ON';
export const MUSIC_BUTTON_OFF = 'MUSIC_BUTTON_OFF';
export const CPU_MUSIC_BUTTON_ON = 'CPU_MUSIC_BUTTON_ON';
export const CPU_MUSIC_BUTTON_OFF = 'CPU_MUSIC_BUTTON_OFF';
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
const updateGameScore = createAction(UPDATE_GAME_SCORE);

const musicButtonOn = createAction(MUSIC_BUTTON_ON);
const musicButtonOff = createAction(MUSIC_BUTTON_OFF);
const cpuMusicButtonOn = createAction(CPU_MUSIC_BUTTON_ON);
const cpuMusicButtonOff = createAction(CPU_MUSIC_BUTTON_OFF);
const musicButtonError = createAction(MUSIC_BUTTON_ERROR);

// Thunks

const playTones = (currentGame, time, dispatch) => {
  const tone = currentGame.shift();
  dispatch(cpuMusicButtonOn(tone));
  const gain = audio[tone].start();
  const oscillator = audio[tone].stop(gain, time);

  oscillator.onended = () => {
    dispatch(cpuMusicButtonOff(tone));
    if (currentGame.length) {
      setTimeout(() => playTones(currentGame, time, dispatch), NEXT_SEQUENCE_TONE_DELAY);
    } else {
      dispatch(endSequence());
    }
  };
};

const playSequence = () => (dispatch, getState) => {
  const currentGame = getState().tones.currentGame;
  dispatch(startSequence());
  setTimeout(() => playTones([...currentGame], CPU_TONE_DURATION, dispatch), NEXT_SEQUENCE_DELAY);
};

export const startGame = () => (dispatch) => {
  dispatch({ type: START_GAME });
  dispatch(newTone());
  dispatch(playSequence());
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
    audio[id].stop(gain, USER_TONE_FADE_DURATION);

    const playerTones = state.tones.player.length;
    const lastTone = playerTones === state.tones.max;
    if (playerTones === state.tones.currentGame.length) {
      if (!lastTone) {
        dispatch(updateGameScore());
        dispatch(newTone());
        dispatch(playSequence());
      } else {
        dispatch(endSequence());
        dispatch(endGame());
      }
    }
  }
};

const handleSimonButtonError = (id, strict) => (dispatch) => {
  dispatch(musicButtonError(id));
  audio[id].playError(() => {
    dispatch(endSequence());
    if (strict) {
      dispatch(endGame());
    } else {
      dispatch(playSequence());
    }
  });
};

export const handleSimonButton = id => (dispatch, getState) => {
  const state = getState();

  if (id === state.tones.currentGame[state.tones.player.length]) {
    dispatch(updatePlayerTones(id));
    dispatch(playButtonSound(id));
  } else {
    dispatch(handleSimonButtonError(id, state.game.strict));
  }
};
