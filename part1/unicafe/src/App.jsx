import { useState } from 'react'


const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statistic = ({ text, value }) => <p>{text} {value}</p>

const Statistics = (props) => {
  return (
    <p>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}<br/>
      all {props.all}<br/>
      average {props.average}<br/>
      positive {props.positive} %
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