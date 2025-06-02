import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // It is for pause as well as for the resume button


  // the useffect is run when the any changes occurs in dependacies(isrunning and ispaused)
  useEffect(()=>{
    let timer;
    if(isRunning && !isPaused){
    timer=setInterval(()=> setTime(t=>t+1),1000);
    }
    return () => clearInterval(timer);
  },[isRunning,isPaused]);

  
  const format = (time) => `${String(Math.floor(time / 60))}:${String(time % 60)}`;


  const start = () =>{
    setIsRunning(true);
    setIsPaused(false);
  }
  
  const stop = () =>{
    setIsRunning(false);
  }
  
  
  const reset = () =>{
    setIsRunning(false);
    setTime(0);
    setIsPaused(false);
  }

  const paused = () =>{
     setIsPaused(true);
  }
 
  const resume = () =>{
    if(isPaused && isRunning){
      setIsPaused(false);
    }
  }

  return (
    <div className="App">

      <div className='Timer'>      
        <h1>{format(time)}</h1>
      </div>

      <div className="buttons">
        
        <button onClick={start}>
          Start 
        </button>
        
        <button onClick={stop}> 
         Stop
        </button>

        <button onClick={paused}> 
         Pause
        </button>

        <button onClick={resume}> 
         resume
        </button>

        <button onClick={reset}>
          Reset
        </button>

      </div>
    </div>
  )
}

export default App
