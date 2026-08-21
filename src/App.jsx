import {useEffect, useState} from "react";
import Words from "./components/Words";
import Container from "./components/Container.jsx";
import TypeRacer from "./components/TypeRacer.jsx";
import Results from "./components/Results.jsx";

import "./App.css";

const getRandomWord = () => Words[Math.floor(Math.random() * Words.length)];

function App() {
    const [newWord, setNewWord] = useState(getRandomWord());
    const [disabled, setDisabled] = useState(true);
    const [correctResults, setCorrectResults] = useState([]);
    const [wrongResults, setWrongResults] = useState([]);
    const [countCorrect, setCountCorrect] = useState(0);
    const [time, setTime] = useState(30);
    const [inputValue, setInputValue] = useState("");
    const [animation, setAnimation] = useState(null);

    const checkAnswer = () => {
        const trimmedValue = inputValue.trim();

        if (trimmedValue === newWord) {
            setCorrectResults((prevCorrect) => [...prevCorrect, newWord]);
            setCountCorrect((prevCount) => prevCount + 1);
            return;
        }

        setWrongResults((prevWrong) => [...prevWrong, trimmedValue]);
    };

    const handleInput = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            checkAnswer();
            setNewWord(getRandomWord());
            setInputValue("");
        }
    };

    const handleStart = () => {
        setDisabled(false);
        setCorrectResults([]);
        setWrongResults([]);
        setCountCorrect(0);
        setInputValue("");
        setTime(30);
        setAnimation(null);
        setNewWord(getRandomWord());
    };

    useEffect(() => {
        if (disabled || time === 0) {
            if (time === 0) {
                setDisabled(true);
            }
            return;
        }

        const timeoutId = setTimeout(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [disabled, time]);

    useEffect(() => {
        if (time <= 10 && !disabled) {
            setAnimation("scaleNumber 2s infinite");
        } else {
            setAnimation(null);
        }
    }, [disabled, time]);

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 gap-6">
            <Container>
                <TypeRacer
                    newWord={newWord}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    disabled={disabled}
                    time={time}
                    animation={animation}
                    handleInput={handleInput}
                    handleStart={handleStart}
                />
            </Container>

            <Container>
              <Results
                  correctResults={correctResults}
                  wrongResults={wrongResults}
                  countCorrect={countCorrect}
              />
            </Container>
        </div>
    );
}

export default App;
