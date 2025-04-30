import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props)=> {
  return <tr><td>{props.text}</td><td>{props.value}</td></tr>
}

const Statistics = (props) => {
    if (props.count=== 0) return <p>No feedback given</p>;
  return (
  <table>
    <thead><h1>Statistics</h1></thead>
    <StatisticLine text = {"Good"} value = {props.one}/>
    <StatisticLine text = "Neutral" value = {props.two}/>
    <StatisticLine text = "Bad" value = {props.three}/>
    <StatisticLine text = "All" value = {props.count}/>
    <StatisticLine text = "Average" value = {<Average positive={props.one} negative = {props.three} total= {props.count}/>}/>
    <StatisticLine text ="Positive" value = {<Positive_total positive={props.one} total={props.count}/>}/>
  </table>
  )
}



const Average = ({ positive, negative, total }) => {
  const average = (positive - negative ) / total;
  console.log(average)
  return average
};

const Positive_total = ({positive, total}) =>{
  if (total === 0) return <p>Positive: 0</p>;

  const percentage = positive / total * 100
  return percentage
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)

  const handleGood = () =>{
    const updatedGood = good + 1
    console.log("Good",updatedGood, good)
    setGood(updatedGood)    
    setCount(count+1)
  }
  const handleNeutral = () =>{
    const updatedNeutral = neutral + 1
    console.log("Neutral",updatedNeutral, neutral)
    setNeutral(updatedNeutral)
    setCount(count+1)
   
  }
  const handleBad = () =>{
    const updatedbad = bad + 1
    console.log("BAD",updatedbad, bad)
    setBad(updatedbad)
    setCount(count+1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text = "Good" />
      <Button handleClick={handleNeutral} text = "Neutral" />
      <Button handleClick={handleBad} text = "Bad" />
      <Statistics one={good} two = {neutral} three ={bad} count ={count}/>
    </div>
  )
}

export default App

