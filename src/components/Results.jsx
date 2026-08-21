const Results = ({correctResults, wrongResults, countCorrect}) => {
    return (
        <div className="w-full max-w-[540px] bg-[#283149] flex flex-col p-4 rounded-md">
            <p className="text-white mb-4">Correct Answers: {countCorrect}</p>

            <div className="w-full flex h-[80vh] max-h-[80vh] overflow-auto gap-4">
                <div className="w-1/2 p-3">
                    {correctResults.map((correctWord, index) => (
                        <div key={`correct-${index}`} className="w-full p-3 bg-[#f73859] text-white rounded mb-2 break-words">
                            <p>{correctWord}</p>
                        </div>
                    ))}
                </div>

                <div className="w-1/2 p-3">
                    {wrongResults.map((wrongWord, index) => (
                        <div key={`wrong-${index}`} className="w-full p-3 bg-[#f73859] text-white rounded mb-2 break-words">
                            <p>{wrongWord}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
