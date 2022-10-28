import React from 'react';
import propTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{countTotalFeedback}</li>
      <li>Positive feedback:{countPositiveFeedbackPercentage}%</li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  countTotalFeedback: propTypes.number.isRequired,
  countPositiveFeedbackPercentage: propTypes.number.isRequired,
};
