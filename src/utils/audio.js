import { tones } from '../constants';

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (button, ctx, gain, type = 'sine') => {
  const oscillator = ctx.createOscillator();
  oscillator.connect(gain);
  oscillator.type = type;
  oscillator.frequency.value = tones[button];

  return oscillator;
};

const createGainNode = (ctx) => {
  const gainNode = ctx.createGain();
  gainNode.connect(ctx.destination);

  return gainNode;
};

const buttonSound = (button) => {
  const btn = button;
  let oscillator; // oscillator needs to be created each time

  const start = (time = 0) => {
    // A gain node for each sound, to avoid unwanted mix of the soundwaves
    const gainNode = createGainNode(audioCtx);
    gainNode.gain.value = 1;
    oscillator = createOscillator(btn, audioCtx, gainNode);
    oscillator.start(audioCtx.currentTime + time);
    return gainNode;
  };

  const stop = (gainNode) => {
    // This avoid the unpleasant ticking noise that happens if the oscillator
    // stops suddenly: gain (volume) decreases gradually, in the given time
    gainNode.gain.exponentialRampToValueAtTime(
      0.00001, audioCtx.currentTime + 0.4,
    );
    oscillator.stop(audioCtx.currentTime + 0.5);
  };

  const playError = () => {
    const gainNode = createGainNode(audioCtx);
    gainNode.gain.value = 0.5;
    oscillator = createOscillator(btn, audioCtx, gainNode, 'sawtooth');
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1);
  };

  return { start, stop, playError };
};

const oscillators = {
  blue: null,
  green: null,
  red: null,
  yellow: null,
};

Object.keys(oscillators).forEach((button) => {
  oscillators[button] = buttonSound(button);
});

export default oscillators;
