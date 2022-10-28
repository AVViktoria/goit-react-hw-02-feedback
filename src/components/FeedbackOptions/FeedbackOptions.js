import React from 'react';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
        // <button type="button" onClick={onNeutral}>
        //   Neutral
        // </button>
        // <button type="button" onClick={onBad}>
        //   Bad
        // </button>
      ))}
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.string.isRequired,
  onLeaveFeedback: propTypes.string.isRequired,
};
