export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the quiz</h2>
      <h3>{numQuestions} questions to test your skill</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}
