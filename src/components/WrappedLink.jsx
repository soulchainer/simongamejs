import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const WrappedLink = ({ label, to }) => (
  <button>
    <Link to={to}>{label}</Link>
  </button>
);

WrappedLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default WrappedLink;
