import Button from "./Button.jsx";

const TypeRacer = ({
                       newWord,
                       inputValue,
                       setInputValue,
                       disabled,
                       time,
                       animation,
                       handleInput,
                       handleStart,
                   }) => {
    return (
        <div className="typeRacer">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>

            <div style={{animation: animation ?? ""}} className="time">
                <p>{time}</p>
            </div>

            <div className="wordValues">
                <input
                    type="text"
                    disabled={disabled}
                    onKeyDown={handleInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={disabled ? "" : "Start typing..."}
                />
                <Button handleStart={handleStart} disabled={disabled}/>
            </div>
        </div>
    );
};

export default TypeRacer;
