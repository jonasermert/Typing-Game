const Results = ({ correctResults, wrongResults, countCorrect }) => {
  return (
    <div className="results">
      <p>Correct Answers: {countCorrect}</p>

      <div className="resultsContainer">
        <div className="correctResults">
          {correctResults.map((correctWord, index) => (
            <div key={`correct-${index}`} className="row">
              <p>{correctWord}</p>
            </div>
          ))}
        </div>

        <div className="wrongResults">
          {wrongResults.map((wrongWord, index) => (
            <div key={`wrong-${index}`} className="row">
              <p>{wrongWord}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
