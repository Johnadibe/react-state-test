import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  // Creating a state for open and close functionality
  const [isOpen, setIsOpen] = useState(true); // It is open by default

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
  }

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <button className="close" onClick={handleToggle}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button texColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button texColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ texColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: texColor }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default App;
