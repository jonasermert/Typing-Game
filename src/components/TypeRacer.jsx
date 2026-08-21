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
        <div className="w-full h-[400px] flex flex-col justify-between items-center bg-white p-6 rounded-lg shadow">
            <div className="w-full bg-gray-50 text-black p-5 text-center rounded">
                <p className="text-[26px] leading-none text-black">{newWord}</p>
            </div>

            <div className={`${animation ? 'animate-scaleNumber' : ''} w-[140px] h-[140px] rounded-full border-2 border-black text-black flex items-center justify-center bg-white`}> 
                <p className="text-[60px] leading-none text-black">{time}</p>
            </div>

            <div className="w-full h-[50px] flex gap-0">
                <input
                    className="w-3/4 h-full px-3 bg-white text-black outline-none border border-gray-200 placeholder-gray-400"
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
