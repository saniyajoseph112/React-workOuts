import { useRef, useState } from "react"



const Timer =()=>{
    const[time,setTime]=useState(0);
    const[running,setRunning] = useState(false);
    const statrtTimeRef = useRef(null);
    const intervalRef = useRef(null);



    const start =()=>{
        if(running)return
        setRunning(true);
        statrtTimeRef.current = Date.now()-time;
        intervalRef.current = setInterval(() => {
            setTime(Date.now() - statrtTimeRef.current)
            
        }, 10);
    };

    const stop=()=>{
        setRunning(false);
        clearInterval(intervalRef.current)
    };

    const reset=()=>{
        stop();
        setTime(0);


    }

    const milliseconds = Math.floor(time/1000);
    const seconds = Math.floor((time%1000)/10);


    return(
        <div>
            <h1>
                {milliseconds.toString().padStart("0",2)}:
                {seconds.toString().padStart("0",2)}

            </h1>

            <button onClick={start} >Start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>

    )
}
export default  Timer