import React, { useEffect, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //const step = 2 ;
  const [isOpen, setIsOpen] = useState(true);

  function handle_pre() {
    //alert('previous')
    //setStep(step-1)
    step > 1 ? setStep((s) => s - 1) : setStep(step);
  }
  function handle_nxt() {
    //alert('next')
    step < 3 ? setStep((s) => s + 1) : setStep(step);
    //setStep(step+1)
  }

  const [step, setStep] = useState(1);
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          {/*<p className="message">{messages[step - 1]}</p>*/}

          <StepMessage step={step}>{messages[step -1]}</StepMessage>
          <div className="buttons">
            {/*<button style={{ backgroundColor: "#7950f2" }} onClick={handle_pre}>
              pre
      </button>*/}

            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handle_pre}
              text="pre"
            />
            <button style={{ backgroundColor: "#7950f2" }} onClick={handle_nxt}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({step, children}){
  return(
  <div className="message">
    <h3>Step {step}</h3>
    {children}
  </div>
  )
}

function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
