import s from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={status ? s.Online : s.Offline}>
        {status ? "Online" : " Offline"}
      </p>
    </div>
  );
};
