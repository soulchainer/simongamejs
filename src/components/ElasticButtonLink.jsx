import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import mojs from 'mo-js';
// import MojsPlayer from 'mojs-player';
import { colors } from '../constants';
import getTransitionAnimation from '../utils/animation';
import shuffle from '../utils/shuffle-array';

class ElasticButtonLink extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
    this.onClickLink = this.onClickLink.bind(this);
  }

  componentDidMount() {
    const button = new mojs.Html({
      duration: 0,
      color: ElasticButtonLink.randomColor(),
      el: `#${this.props.id}`,
      isShowStart: true,
    });
    button.play();

    /* eslint-disable no-unused-vars */
    // const timeline = new mojs.Timeline({}).add(button);
    // const mojsPlayer = new MojsPlayer({ add: button });
    /* eslint-enable no-unused-vars */
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.redirect === true;
  }

  onClickLink(event) {
    event.preventDefault();
    // const id = event.target.id.split('-')[0];
    function onTransitionEnd() { this.setState({ redirect: true }); }
    const mouseClickAnimation = getTransitionAnimation(onTransitionEnd.bind(this));
    mouseClickAnimation.play();
  }

  render() {
    const { id, label, to } = this.props;
    if (this.state.redirect) return <Redirect push to={to} />;
    return (
      <div className="ElasticButtonLink" id={`${id}`}>
        <Link
          to={to}
          id={`${id}-link`}
          onClick={this.onClickLink}
          onMouseEnter={ElasticButtonLink.onMouseEnter}
          onMouseLeave={ElasticButtonLink.onMouseLeave}
        >
          {label}
        </Link>
        <style jsx>{`
          .ElasticButtonLink {
            background-color: transparent;
            font-size: 1.4rem;
            line-height: 1.8;
            text-align: center;
            width: 8rem;
          }

          .ElasticButtonLink>a {
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

ElasticButtonLink.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

ElasticButtonLink.randomColor = function randomColor() {
  return colors[shuffle(Object.values(['blue', 'green', 'yellow']))[0]];
};

ElasticButtonLink.onMouseEnter = function onMouseEnter(event) {
  const id = `#${event.target.id.split('-')[0]}`;
  ElasticButtonLink.onMouseEnterAnimation(id);
};

ElasticButtonLink.onMouseEnterAnimation = function onMouseEnterAnimation(id) {
  const mouseEnterAnimation = new mojs.Html({
    duration: 400,
    el: id,
    easing: 'elastic.out',
    isShowStart: true,
    scale: { 1: 1.1 },
    scaleY: { 1: 0.8 },
  });
  mouseEnterAnimation.play();
};

ElasticButtonLink.onMouseLeave = function onMouseLeave(event) {
  const id = `#${event.target.id.split('-')[0]}`;
  ElasticButtonLink.onMouseLeaveAnimation(id);
};

ElasticButtonLink.onMouseLeaveAnimation = function OnMouseLeaveAnimation(id) {
  const mouseLeaveAnimation = new mojs.Html({
    duration: 300,
    el: id,
    easing: 'elastic.in',
    isShowStart: true,
    scale: { 1.1: 0.7 },
    scaleY: { 0.8: 1.2 },
  }).then({
    scale: { to: 1.05 },
    scaleY: { to: 0.9 },
  }).then({
    scale: { to: 1 },
    scaleY: { to: 1 },
  });
  mouseLeaveAnimation.play();
};

export default ElasticButtonLink;
