import s from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr className={s.list_h}>
            <th className={s.item_h}>Type</th>
            <th className={s.item_h}>Amount</th>
            <th className={s.item_h}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <tr key={id} className={s.list_w}>
              <td className={s.item_w}>{type}</td>
              <td className={s.item_w}>{amount}</td>
              <td className={s.item_w}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
