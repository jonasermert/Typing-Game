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
        <div className="w-full h-[400px] flex flex-col justify-between items-center bg-[#283149] p-4 rounded-md text-white">
            <div className="w-full bg-[#111727] text-white p-5 text-center rounded">
                <p className="text-[26px] leading-none text-white" style={{color: '#fff'}}>{newWord}</p>
            </div>

            <div className={`${animation ? 'animate-scaleNumber' : ''} w-[140px] h-[140px] rounded-full border-2 border-[#f73859] text-white flex items-center justify-center`}> 
                <p className="text-[60px] leading-none text-white" style={{color: '#fff'}}>{time}</p>
            </div>

            <div className="w-full h-[50px] flex gap-0">
                <input
                    className="w-3/4 h-full px-3 bg-[#111727] text-white outline-none border-none placeholder-white"
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
