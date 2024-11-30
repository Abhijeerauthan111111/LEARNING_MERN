import React, { useRef, useState } from 'react'

const Ref_usestate = () => {
    
  console.log("UI Repainted");
    const [currentState,setcurrentState]=useState(0);
    const ref = useRef(0);

const refclick=()=> ref.current++;
const usestateclick=()=>setcurrentState(prevstate=>prevstate+1);



  return (
    <>
    <div>Use state counter : {currentState}</div>
    <div>Ref Counter : {ref.current}</div>
    <button onClick={usestateclick}>useState </button>
    <button onClick={refclick}>Ref counter</button> 
    </>
  )
}

export default Ref_usestate;