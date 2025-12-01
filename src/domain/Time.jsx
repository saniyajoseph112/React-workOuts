import { miniSerializeError } from '@reduxjs/toolkit'
import {useState,useRef} from 'react'

const Time = ()=>{
    const[Time,setTime] =useState(0)
    const[running,setRunning]=useState(False)
    const startTimeRef = useRef(null)
    const intervalRef = useRef(null)


    const start =()=>{
        if(running) return
        setRunning(false)
        startTimeRef.current = Date.now()-Time
        intervalRef.current=setInterval(() => {
            setTime(Date.now()-startTimeRef.current)
            
        }, 10);


        const stop =()=>{
            setRunning(False)
            clearInterval(intervalRef.current)
        }

        const rest=()=>{
            stop();
            setTime(0);
        }
    }

    seconds=Math.floor(Time / 1000)
    milisecond=Math.floor((Time%1000)/10)

    return(
        <div>
            <h1>
                {}
            </h1>
        </div>
    )
}