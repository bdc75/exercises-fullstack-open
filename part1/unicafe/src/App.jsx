import { useState } from 'react'


const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good}></StatisticLine>
        <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
        <StatisticLine text="bad" value={props.bad}></StatisticLine>
        <StatisticLine text="all" value={props.all}></StatisticLine>
        <StatisticLine text="average" value={props.average}></StatisticLine>
        <StatisticLine text="positive" value={`${props.positive}%`}></StatisticLine>
      </tbody>
    </table>
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