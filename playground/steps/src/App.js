import React, { useEffect, useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App (){
  //const step = 2 ;
  function handle_pre(){
    //alert('previous')
    //setStep(step-1)
    step > 1? setStep(step-1) : setStep(step)
  }
  function handle_nxt(){
    //alert('next')
    step < 3? setStep(step+1) : setStep(step)
    //setStep(step+1)
  }
  const [step, setStep] = useState(1);
return <div className="steps">
  <div className="numbers">
    <div className={`${step >=1 ? "active":""}`}>1</div>
    <div className={`${step >=2 ? "active":""}`}>2</div>
    <div className={`${step >=3 ? "active":""}`}>3</div>
  </div>
<p className="message">{messages[step-1]}</p>
<div className="buttons">
  <button style={{backgroundColor: "#7950f2"}} onClick={handle_pre}>pre</button>
  <button style={{backgroundColor: "#7950f2"}} onClick={handle_nxt}>next</button>
</div>
</div>

};
