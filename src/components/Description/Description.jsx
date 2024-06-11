import s from "./Description.module.css";

export const Description = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}> Sip Happens Cafe</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
