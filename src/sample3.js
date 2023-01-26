import React,{useState} from 'react'

function Sample3() {
    const [state,sets]=useState()
    const [result,setres]=useState()
    const strnum=()=>{
 
            var k=1;
            for(var i=1;i<=parseInt(state);i++){
                k=k*i

            }
            setres(k)


    }
  return (
    <>
    <h2>This is Factorial Program</h2>
    <p>PLease Enter a number and the factorial Value</p>
    <h1>FACTORIAL: {result}</h1>
    <input type={"number"} value={state} onChange={(t)=>sets(t.target.value)}/>
    <button onClick={strnum}>Click</button>

      
    </>
  )
}

export default Sample3
