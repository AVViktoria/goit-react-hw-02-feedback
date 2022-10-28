import React from 'react';
import propTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => {
  return <Notification message="There is no feedback">{message}</Notification>;
};

export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
