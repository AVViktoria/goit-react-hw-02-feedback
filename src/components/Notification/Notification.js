import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => {
  return <Notification message="There is no feedback">{message}</Notification>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
