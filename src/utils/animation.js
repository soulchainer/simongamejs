import mojs from 'mo-js';

export default function getTransitionAnimation(onTransitionEnd = () => null) {
  const TransitionAnimation = new mojs.Html({
    duration: 400,
    el: '#root',
    easing: 'ease.in',
    isShowStart: true,
    opacity: { 1: 0 },
    onRepeatComplete() { onTransitionEnd(); },
  });

  return TransitionAnimation;
}
