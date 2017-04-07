import React, { Children, Component, PropTypes } from 'react';
import getTransitionAnimation from '../utils/animation';

class Transition extends Component {
  constructor(props) {
    super(props);
    /*
      transitionComplete will be passed to children, so them could «react» to
      the transition end
    */
    this.state = { transitionComplete: false };
    this.propsToChildren = this.propsToChildren.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
    const onLoadAnimation = getTransitionAnimation(this.onEnd);
    if (this.props.playBackwards) {
      onLoadAnimation.playBackward();
    } else {
      onLoadAnimation.play();
    }
  }

  onEnd() {
    if (this.props.onEnd) this.setState({ transitionComplete: true });
    this.props.onEnd();
  }

  propsToChildren(child) {
    return React.cloneElement(child, {
      transitionComplete: this.state.transitionComplete,
    });
  }

  render() {
    // pass the props of the Transition to all their direct children
    const children = Children.map(this.props.children, this.propsToChildren);
    return (
      <div>{children}</div>
    );
  }
}

Transition.propTypes = {
  children: PropTypes.arrayOf(React.PropTypes.element).isRequired,
  onEnd: PropTypes.func,
  playBackwards: PropTypes.bool,
};

Transition.defaultProps = {
  onEnd: function onEnd() { return null; },
  playBackwards: false,
};

export default Transition;
