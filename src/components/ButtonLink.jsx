import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { ButtonLinkCSS } from '../styles/buttonLink';
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
        <style jsx>{ButtonLinkCSS}</style>
      </div>
    );
  }
}

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ButtonLink;
