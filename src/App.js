import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCounter] = useState(0)

  return (
    <div className="App">
      <button className='counter' onClick={() => setCounter(count+1)}>+</button>
      <button className='counter' onClick={() => setCounter(count-1)}>-</button>
      <button className='counter' onClick={() => setCounter(0)}>Reset</button>
      <h2>
        {count}
      </h2>
    </div>
  )
}

export default App;
