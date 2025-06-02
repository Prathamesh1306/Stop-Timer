import { useState } from 'react'
import './App.css'

function App() {
  const [time, Time] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  
  return (
    <div className="App">

      <div className='Timer'>      
        <h1>da</h1>
      </div>
      <div className="buttons">
        <button onClick={'myvar=set'}>
          Start 
        </button>
        
        <button>
         Stop
        </button>

        <button>
          Reset
        </button>

      </div>
    </div>
  )
}

export default App
