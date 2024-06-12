import s from "./Feedback.module.css";

export const Feedback = ({ feedback, resultFeedback, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {Object.entries(feedback).map(([key, value]) => (
          <li className={s.item} key={key}>
            <p className={s.text}>
              {key}: {value}
            </p>
          </li>
        ))}
        <li className={s.item}>
          <p className={s.text_total}>Total: {totalFeedback}</p>
        </li>
        <li className={s.item}>
          <p className={s.text_percent}>Positive feedback: {resultFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};
