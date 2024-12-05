import React from 'react'
import {useState} from 'react'
const Stopwatch = ()=>{
    const [isRunning,setIsRunning] = useState(false)
    function handleStartStop(){
        setIsRunning((pre)=>!pre)
    }
    return(
        <div>
            <h1>Stopwatch app</h1>
            <h1> Timer:</h1>
            <button onClick = {handleStartStop}>{isRunning?'stop':'start'}</button>
            <button>reset</button>
        </div>
    )
}