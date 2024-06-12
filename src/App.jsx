import { useState, useEffect } from "react";
import { Description, Feedback, Options } from "./components";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem("feedback")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleClickFeedback = (variant, value) => {
    setFeedback((prev) => ({
      ...prev,
      [variant]: prev[variant] + value,
    }));
  };

  const handleReset = () => {
    setFeedback(initialState);
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, values) => acc + values,
    0
  );

  const resultFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <section>
      <Description feedback={feedback} />
      <Options
        options={Object.keys(feedback)}
        handleClickFeedback={handleClickFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          feedback={feedback}
          resultFeedback={resultFeedback}
        />
      ) : (
        <p className="text_stab">No feedback yet</p>
      )}
    </section>
  );
};

export default App;
