export default function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPossiblePoints}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        {" "}
        RESET
      </button>
    </>
  );
}
