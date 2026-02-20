import { useState } from 'react';

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

const App = () => {
    return (
        <div>
            <Steps />
        </div>
    );
};

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    const [score, setScore] = useState(0);

    const handlePrevious = () => {
        if (step > 1) {
            setStep((s) => s - 1);
        }
    };

    const handleNext = () => {
        if (step < 3) {
            setStep((s) => s + 1);
        }
    };

    const handleModal = () => {
        setIsOpen((is) => !is);
    };

    const handleScore = () => {
        setScore((score) => score + 1);
    };
    return (
        <div>
            <div className="close" onClick={handleModal}>
                {isOpen ? 'X' : 'open'}
            </div>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>
                    <p className="message">Hello 👋</p>
                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            text="Previous"
                            onClick={handlePrevious}
                            emoji="👈"
                        />
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            text="Next"
                            onClick={handleNext}
                            emoji="👉"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function Button({textColor, bgColor, onClick, text, emoji}) {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}>
            <span>{emoji}</span>
            {text}
        </button>
    );
}

export default App;
