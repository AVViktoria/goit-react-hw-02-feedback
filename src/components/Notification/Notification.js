import React from 'react';
import PropTypes from 'prop-types';
// import './Notification.css';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
