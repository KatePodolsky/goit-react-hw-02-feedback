import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "./components/Container/Container";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification"

class App extends Component {
 static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = (e) => {
    const { name } = e.target;
     this.setState((prevState)=>{
            return {
               [name]: prevState[name] + 1
            }
        })
  }

  countTotalFeedback = () => {
      return (Object.values(this.state)).reduce((acc, review) => (acc + review), 0);
  }
  
  countPositiveFeedbackPercentage = () => {
      return  Math.round((this.state.good * 100) / this.countTotalFeedback())   
  }
  
  render() {
    const keys = Object.keys(this.state);
    const isTotal = this.countTotalFeedback()
        return (
          <Container>
            <Section title={'Please leave feedback'}>
              <FeedbackOptions options={keys} onLeaveFeedback={this.onLeaveFeedback}/>
            </Section>
            {isTotal ? (<Section title={'Statistics'}>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>) : <Notification message={"No feedback given"}/>}
          </Container>
        )
    }
}

export default App;
