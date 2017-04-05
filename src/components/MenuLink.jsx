import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import mojs from 'mo-js';
// import MojsPlayer from 'mojs-player';
import { colors } from '../constants';
import shuffle from '../utils/shuffle-array';

class MenuLink extends Component {
  componentDidMount() {
    const button = new mojs.Html({ // eslint-disable-line
      duration: 0,
      color: MenuLink.randomColor(),
      el: `#${this.props.id}`,
      isShowStart: true,
    }).play();

    /* eslint-disable no-unused-vars */
    // const timeline = new mojs.Timeline({}).add(button);
    // const mojsPlayer = new MojsPlayer({ add: button });
    /* eslint-enable no-unused-vars */
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { id, label, to } = this.props;
    return (
      <div className="MenuLink" id={`${id}`}>
        <Link
          to={to}
          id={`${id}-link`}
          onClick={MenuLink.onClick}
          onMouseEnter={MenuLink.onMouseEnter}
        >
          {label}
        </Link>
        <style jsx>{`
          .MenuLink {
            background-color: transparent;
            font-size: 1.4rem;
            line-height: 1.8;
            text-align: center;
            width: 8rem;
          }

          .MenuLink>a {
            border-color: currentcolor;
            border-radius: 5px;
            border-style: solid;
            border-width: 2px;
            color: inherit;
            display: inline-block;
            height: 100%;
            overflow: hidden;
            text-decoration: none;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

MenuLink.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

MenuLink.randomColor = () => colors[shuffle(Object.values(['blue', 'green', 'yellow']))[0]];

MenuLink.onClick = (event) => {
  event.preventDefault();
  const id = event.target.id.split('-')[0];
  console.log(id); // eslint-disable-line
};

MenuLink.onMouseEnter = (event) => {
  const id = `#${event.target.id.split('-')[0]}`;
  MenuLink.onMouseEnterAnimation(id);
};

MenuLink.onMouseEnterAnimation = (id) => {
  new mojs.Html({
    duration: 400,
    el: id,
    easing: 'elastic.in',
    isShowStart: true,
    scale: { 1: 1.1 },
    scaleY: { 1: 0.8 },
  }).then({
    scale: { to: 0.9 },
    scaleY: { to: 1 },
  }).then({
    scale: { to: 1.05 },
    scaleY: { to: 0.9 },
  }).then({
    scale: { to: 1 },
    scaleY: { to: 1 },
  })
  .play();
};

export default MenuLink;
