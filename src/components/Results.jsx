const Results = ({correctResults, wrongResults, countCorrect}) => {
    return (
        <div className="w-full max-w-[540px] bg-[#283149] flex flex-col p-4 rounded-md">
            <p className="text-white mb-4">Correct Answers: {countCorrect}</p>

            <div className="w-full flex items-start gap-4">
                <div className="w-1/3 max-h-[40vh] overflow-auto p-3">
                    {correctResults.map((correctWord, index) => (
                        <div key={`correct-${index}`} className="w-full p-3 bg-[#f73859] text-white rounded mb-2 break-words">
                            <p className="text-white" style={{color: '#fff'}}>{correctWord}</p>
                        </div>
                    ))}
                </div>

                <div className="flex-1 p-3 max-h-[60vh] overflow-auto">
                    {wrongResults.map((wrongWord, index) => (
                        <div key={`wrong-${index}`} className="w-full p-3 bg-[#f73859] text-white rounded mb-2 break-words">
                            <p className="text-white">{wrongWord}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
