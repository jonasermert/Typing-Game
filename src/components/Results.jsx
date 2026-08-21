const Results = ({correctResults, wrongResults, countCorrect}) => {
    return (
        <div className="w-full max-w-[720px] bg-white flex flex-col p-6 rounded-lg shadow">
            <p className="text-black mb-4 font-medium">Correct Answers: {countCorrect}</p>

            <div className="w-full flex flex-col gap-4">
                <div className="w-full p-3 max-h-[30vh] overflow-auto border border-gray-100 rounded">
                    {correctResults.map((correctWord, index) => (
                        <div key={`correct-${index}`} className="w-full p-3 bg-gray-100 text-black rounded mb-2 break-words">
                            <p className="text-black">{correctWord}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full p-3 max-h-[40vh] overflow-auto border border-gray-100 rounded">
                    {wrongResults.map((wrongWord, index) => (
                        <div key={`wrong-${index}`} className="w-full p-3 bg-gray-100 text-black rounded mb-2 break-words">
                            <p className="text-black">{wrongWord}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;
