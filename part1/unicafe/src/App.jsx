import { useState } from 'react'


const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => <>{text} {value}<br/></>

const Statistics = (props) => {
  return (
    <p>
      {/* good {props.good}<br/> */}
      <StatisticLine text="good" value={props.good}></StatisticLine>
      {/* neutral {props.neutral}<br/> */}
      <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
      {/* bad {props.bad}<br/> */}
      <StatisticLine text="bad" value={props.bad}></StatisticLine>
      {/* all {props.all}<br/> */}
      <StatisticLine text="all" value={props.all}></StatisticLine>
      {/* average {props.average}<br/> */}
      <StatisticLine text="average" value={props.average}></StatisticLine>
      {/* positive {props.positive} % */}
      <StatisticLine text="positive" value={`${props.positive}%`}></StatisticLine>
    </p>
  )
}

const App = () => {
  console.log(new Date());
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        return () => setGood(good + 1)
        break;
      case "neutral":
        return () => setNeutral(neutral + 1)
        break;
      case "bad":
        return () => setBad(bad + 1)
        break;
    }
  }

  const total = good + neutral + bad
  const avg = total>0 ? ((1)*good + (0)*neutral + (-1)*bad) / total : 0
  const pctPositive = total>0 ? 100*(good  / total) : 0
  
  if (total === 0) {
    return (
      <div>
        <Header text="give feedback"></Header>
        <Button onClick={handleFeedback("good")} text="good"></Button>
        <Button onClick={handleFeedback("neutral")} text="neutral"></Button>
        <Button onClick={handleFeedback("bad")} text="bad"></Button>
        <Header text="statistics"></Header>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Header text="give feedback"></Header>
      <Button onClick={handleFeedback("good")} text="good"></Button>
      <Button onClick={handleFeedback("neutral")} text="neutral"></Button>
      <Button onClick={handleFeedback("bad")} text="bad"></Button>
      <Header text="statistics"></Header>
      {/* <Statistic text="good" value={good}></Statistic>
      <Statistic text="neutral" value={neutral}></Statistic>
      <Statistic text="bad" value={bad}></Statistic>
      <Statistic text="all" value={total}></Statistic>
      <Statistic text="average" value={avg}></Statistic>
      <Statistic text="positive" value={`${pctPositive}%`}></Statistic> */}
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={total} 
        average={avg}
        positive={pctPositive}
      >
      </Statistics>
    </div>
  )
}

export default App