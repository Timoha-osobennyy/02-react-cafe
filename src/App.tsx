import { useState } from 'react'
import './App.css' // Стили компонента

// Типы для TypeScript
type VoteType = 'good' | 'neutral' | 'bad'

export default function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVote = (type: VoteType) => {
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }))
  }

  const totalVotes = votes.good + votes.neutral + votes.bad
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>Please rate our service!</p>
      
      <div className="buttons">
        <button onClick={() => handleVote('good')}>Good</button>
        <button onClick={() => handleVote('neutral')}>Neutral</button>
        <button onClick={() => handleVote('bad')}>Bad</button>
      </div>

      {totalVotes > 0 ? (
        <div className="stats">
          <p>Good: {votes.good}</p>
          <p>Neutral: {votes.neutral}</p>
          <p>Bad: {votes.bad}</p>
          <p>Total: {totalVotes}</p>
          <p>Positive: {positiveRate}%</p>
        </div>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  )
}