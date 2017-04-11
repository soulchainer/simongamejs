import React, { Component } from 'react';
import { getTransitionAnimation } from '../utils/animation';

export default function withTransition(
  WrappedComponent, args = { direction: 'normal' },
) {
  const { direction } = args;

  return class extends Component {
    constructor(props) {
      super(props);

      this.state = { transitionComplete: false };
      this.onEnd = this.onEnd.bind(this);
    }

    componentDidMount() {
      const onLoadAnimation = getTransitionAnimation(this.onEnd, direction);
      onLoadAnimation.play();
    }

    onEnd() {
      this.setState({ transitionComplete: true });
    }

    render() {
      return (
        <WrappedComponent
          transitionComplete={this.state.transitionComplete}
          {...this.props}
        />
      );
    }
  };
}
