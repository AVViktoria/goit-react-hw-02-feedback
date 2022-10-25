import React from 'react';
// import styled from "Feedback.styled.css";
import './Feedback.css';

class Feedback extends React.Component {
  handleIncrement() {
    console.log('Click Good');
  }
  render() {
    return (
      <div className="feedback">
        <h1 className="mainTitle">Please leave feedback</h1>
        <div className="buttons">
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Click Neutral');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Click Bad');
            }}
          >
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics:</h2>
          <p>Good:</p>
          <p>Neutral:</p>
          <p>Bad:</p>
          <p>Total:</p>
          <p>Positive feedback:%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
