import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { colors } from '../constants';
import { getTransitionAnimation } from '../utils/animation';

class ButtonLink extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
    this.onClickLink = this.onClickLink.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.redirect === true;
  }

  onClickLink(event) {
    event.preventDefault();
    function onTransitionEnd() { this.setState({ redirect: true }); }
    const mouseClickAnimation = getTransitionAnimation(
      onTransitionEnd.bind(this), 'reverse');
    mouseClickAnimation.play();
  }

  render() {
    const { label, to } = this.props;
    if (this.state.redirect) return <Redirect push to={to} />;
    return (
      <div className="ButtonLink">
        <Link className="ButtonLink-link" to={to} onClick={this.onClickLink}>
          {label}
        </Link>
        <style jsx>{`
          .ButtonLink {
            box-shadow: .3rem .3rem ${colors.shadow};
            font-family: 'Francois One', sans-serif;
            font-size: 1.4rem;
            letter-spacing: .1em;
            max-width: 90%;
            text-align: center;
            min-width: 8rem;
          }

          :global(.ButtonLink-link) {
            border: .25rem solid ${colors.shadowWhite};
            color: ${colors.white};
            display: inline-block;
            height: 100%;
            line-height: 2rem;
            padding: .5rem;
            text-decoration: none;
            transition: border-color .1s .4s, background-color .4s;
            width: 100%;
          }

          :global(.ButtonLink-link:hover) {
            background-color: ${colors.yellow};
            border-color: ${colors.yellow};
            color: ${colors.black};
            transition: border-color .1s, background-color .4s .1s;
          }
        `}</style>
      </div>
    );
  }
}

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ButtonLink;
