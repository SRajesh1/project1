/* eslint-disable no-undef */
import React,{useState} from 'react'
import Sample from './sample';
import Sample3 from './sample3';

function Sample2() {
    const [state1,sets1]= useState()
    const [state2,sets2]= useState()
    const [state3,sets3]= useState()

    const palin=()=>{
     
     var p1 = state1.split("").reverse("").join("")
      var p2 = state2.split("").reverse("").join("")
      if(state1===p1 && state2===p2){
        sets3("both strings are palindrome")
      }
      if(state1===p1)
        sets3("first string is palindrome")
      if(state2===p2)
        sets3("second string is palindrome")
      if (state1!==p1 && state2!==p2){
        sets3("both are not  palindrome")
      }
      
      }

  return (
    <> 
    <div>
        <h1 style={{textDecoration:"underline",color:"green",fontFamily:"cursive",textAlign:"center"}}>RAJESH PROJECTS</h1>
        <h2 style={{paddingLeft:10}}>This is palindrome program</h2>
        <p>please give any two Strings and check the which string is palindrome </p>
        <h1 style={{paddingLeft:20}}>PALINDROME :{state3}</h1>
        <input type={"text"} value={state1} onChange={(pd)=>sets1(pd.target.value)}/>
        <input type={"text"} value={state2} onChange={(pd)=>sets2(pd.target.value)}/>
        <button  onClick={palin}>click</button>
      
    </div>
    <Sample/>
    <Sample3/>
    </>
  )

}
export default Sample2


