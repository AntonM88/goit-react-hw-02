import s from "./Options.module.css";

export const Options = ({
  options,
  handleClickFeedback,
  handleReset,
  totalFeedback,
}) => {
  return (
    <div className={s.wrap}>
      {options.map((item) => (
        <button
          key={item}
          className={s.btn}
          onClick={() => handleClickFeedback(item, 1)}
        >
          {item}
        </button>
      ))}
      {totalFeedback ? (
        <button className={s.btn} onClick={handleReset}>
          reset
        </button>
      ) : null}
    </div>
  );
};
