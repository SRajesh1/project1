import React,{useState} from 'react'
import image from './image1.jpg'

function Sample() {
    const [state1,setstate1]=useState(0)
    const [state2,setstate2]=useState(0)
    const [state3,setstate3]=useState(0)
    const [state4,setstate4]=useState(0)
    const rajesh=()=>{
        var h=0;
        h=parseInt(state1)* Math.pow((1+parseInt(state2)/parseInt(state3)),state3)
        setstate4(h)
        

    }
    

  return (
    <div>
        
        <h1>SIMPLE INTEREST: {state4}</h1>
        <input type={"number"} value={state1} onChange={(p)=>setstate1(p.target.value)} />
        <input type={"number"} value={state2} onChange={(p)=>setstate2(p.target.value)} />
        <input type={"number"} value={state3} onChange={(p)=>setstate3(p.target.value)} />
        <button onClick={rajesh}>calculate</button>
    </div>
  )
}

export default Sample;
