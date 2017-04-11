import anime from 'animejs';

export function animeBatch({ targets, props, sharedProps }) {
  const properties = (props) ? Object.keys(props) : [];
  const animes = targets.map((target, targetIndex) => {
    const targetProperties = { targets: target };
    properties.forEach((property) => {
      targetProperties[property] = props[property][targetIndex];
    });
    return anime({ ...targetProperties, ...sharedProps });
  });
  animes.play = function playAll() {
    animes.forEach(anim => anim.play());
  };
  return animes;
}

export function playBatch(...args) {
  args.forEach(item => item.play());
  playBatch.add = function add(...anims) {
    playBatch(...anims);
  };
  return playBatch;
}

export function getTransitionAnimation(
  onTransitionEnd = () => null, direction = 'normal',
) {
  const TransitionAnimation = {
    autoplay: false,
    direction,
    duration: 400,
    targets: '#root',
    easing: 'easeInSine',
    opacity: [0, 1],
    complete: onTransitionEnd,
  };

  return anime(TransitionAnimation);
}
