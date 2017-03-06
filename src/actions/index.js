import createAction from '../utils/create-action';
import randomTone from '../utils/get-random-music-button';

export const START_GAME = 'START_GAME';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const PLAYING_MELODY = 'PLAYING_MELODY';
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const UPDATE_GAME_SPEED = 'UPDATE_GAME_SPEED';
export const TOGGLE_STRICT_MODE = 'TOGGLE_STRICT_MODE';

export const UPDATE_PLAYER_TONES = 'UPDATE_PLAYER_TONES';
export const NEW_TONE ='NEW_TONE';
export const SET_MAX_TONES = 'SET_MAX_TONES';

export const MUSIC_BUTTON_PRESSED = 'MUSIC_BUTTON_PRESSED';
export const MUSIC_BUTTON_RELEASED = 'MUSIC_BUTTON_RELEASED';
export const STOP_PLAYBACK = 'STOP_PLAYBACK';

export const startGame = payload => ({type: START_GAME, payload: randomTone()});
export const newTone = payload => ({type: NEW_TONE, payload: randomTone()});

export const setGameMode = createAction(SET_GAME_MODE);
export const playingMelody = createAction(PLAYING_MELODY);
export const toggleSound = createAction(TOGGLE_SOUND);
export const updateGameSpeed = createAction(UPDATE_GAME_SPEED);
export const toggleStrictMode = createAction(TOGGLE_STRICT_MODE);
export const updatePlayerTones = createAction(UPDATE_PLAYER_TONES);
export const setMaxTones = createAction(SET_MAX_TONES);
export const musicButtonPressed = createAction(MUSIC_BUTTON_PRESSED);
export const musicButtonReleased = createAction(MUSIC_BUTTON_RELEASED);
export const stopPlayback = createAction(STOP_PLAYBACK);