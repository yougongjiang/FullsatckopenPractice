import React, { useState } from 'react'


const Display=({text,num}) =>(
  
      <tr>
        <td>{text}</td>
        <td>{num}</td>     
      </tr>
 

)
const Topercent=({num})=>(
  <span>
    {num}%
  </span>
)

 
const Statistics=(props)=>{
  let good=props.good
  let neutral=props.neutral
  let bad=props.bad
  let all=good+neutral+bad
  let average=(good-bad)/(good+neutral+bad)
  let positive=(good)/(good+neutral+bad)*100
  if(all==0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Display text='good' num={good}/>
          <Display text='neutral' num={neutral}/>
          <Display text='bad' num={bad}/>
          <Display text='all' num={all}/>
          <Display text='average' num={average} />
          <Display text='positive' num={<Topercent num={positive}/>} />
        </tbody>
      </table>
      
      
    </div>
      
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App