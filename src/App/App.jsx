import React, { Component } from 'react';
// import './Feedback.css';

//*    components    //
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import Section from 'components/Section';


// //*      Root      //
class App extends Component {
  // static defaultProps = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //*  handle fn for buttons   //
  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
   
  //*  total Fn   //
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }

  //*  percentage Fn   //
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return  this.countTotalFeedback() ? Math.round(good / this.countTotalFeedback() * 100) : 0;
    
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
        <Section title = "Please leave feedback">

        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleLeaveFeedback}
        // onGood={this.handleGood}
        // onNeutral={this.handleNeutral}
        // onBad={this.handleBad}
        />
<h2>Statistics</h2>

        {!this.countTotalFeedback() ?
        
          <Notification message="There is no feedback" /> :
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} />
        }
    </Section>
    );
  }
}

  export default App;








  //*  handle fn for buttons   //
 
  // handleGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // handleBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  