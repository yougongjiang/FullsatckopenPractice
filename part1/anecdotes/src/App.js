import React, { useState } from 'react'


const Display=(props)=>{
  console.log('num',props.num)
  console.log('ary',props.ary)

  return (
    <div>

    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote,setVote]=useState(new Uint8Array(7))
  const [max,setMax]=useState(0)

  //注意函数开头小写，组件名字大写，要明白自己写的是什么，不然也不报错，想半天不知道为什么
 //注意变量名称别重名
  const handleClick = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  };
  const handleVoteClick=()=>{
    
    const copy=[...vote]
    copy[selected]+=1
    setVote(copy)
    if(vote[selected]>vote[max]){
      setMax(selected)
    }

  };

  return (
    <div>
      <h1>
        Anecdote of the day   
      </h1>
      {anecdotes[selected]}
      <div>
        <button onClick={handleVoteClick} >vote</button>

        <button onClick={handleClick}>click</button>
      </div>
      <Display num={selected} ary={vote}/>
      <h1>
        Anecdote with most votes
      </h1>
      {anecdotes[max]}
    </div>
    
  )
  
}

export default App
