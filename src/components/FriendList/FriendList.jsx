import { FriendListItem } from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={s.item}>
            <FriendListItem avatar={avatar} name={name} status={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};
