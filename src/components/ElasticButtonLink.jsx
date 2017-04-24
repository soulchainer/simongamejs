import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import debounce from 'lodash.debounce';
import { colors } from '../constants';
import { getTransitionAnimation } from '../utils/animation';
import shuffle from '../utils/shuffle-array';

class ElasticButtonLink extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
    this.onClickLink = this.onClickLink.bind(this);
  }

  componentDidMount() {
    const button = document.querySelector(`#${this.props.id}`);
    const className = shuffle(['blue', 'green', 'yellow'])[0];
    if (button.classList) {
      button.classList.add(className);
    } else {
      button.className = `${button.className} ${className}`;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.redirect === true;
  }

  onClickLink(event) {
    event.preventDefault();
    // const id = event.target.id.split('-')[0];
    function onTransitionEnd() { this.setState({ redirect: true }); }
    const mouseClickAnimation = getTransitionAnimation(
      onTransitionEnd.bind(this), 'reverse');
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
            max-width: 85%;
            text-align: center;
            width: 8rem;
          }

          .blue {
            color: ${colors.blue}
          }

          .green {
            color: ${colors.green}
          }

          .yellow {
            color: ${colors.yellow}
          }

          .ElasticButtonLink>a {
            border-color: currentcolor;
            border-radius: 5px;
            border-style: solid;
            border-width: 2px;
            box-sizing: content-box;
            color: inherit;
            display: inline-block;
            height: 100%;
            overflow: hidden;
            padding: 5px;
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

ElasticButtonLink.onMouseEnter = function onMouseEnter(event) {
  const id = `#${event.target.id.split('-')[0]}`;
  ElasticButtonLink.onMouseEnterAnimation(id);
};

ElasticButtonLink.onMouseEnterAnimation = debounce((id) => {
  const mouseEnterAnimation = anime({
    duration: 400,
    targets: id,
    easing: 'easeOutElastic',
    scaleX: { value: [1, 1.1], elasticity: 500 },
    scaleY: { value: [1, 0.8], elasticity: 500 },
  });
  mouseEnterAnimation.play();
}, 400);

ElasticButtonLink.onMouseLeave = function onMouseLeave(event) {
  const id = `#${event.target.id.split('-')[0]}`;
  ElasticButtonLink.onMouseLeaveAnimation(id);
};

ElasticButtonLink.onMouseLeaveAnimation = debounce((id) => {
  const mouseLeaveAnimation = anime({
    duration: 300,
    targets: id,
    easing: 'easeOutElastic',
    scaleX: [
      { value: [1.1, 1], elasticity: 1000 },
    ],
    scaleY: [
      { value: [0.8, 1], elasticity: 1000 },
    ],
  });
  mouseLeaveAnimation.play();
}, 400);

export default ElasticButtonLink;
