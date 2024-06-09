import s from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_user}>
        <img className={s.img} src={avatar} alt={tag} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.title}>Followers</span>
          <span className={s.number}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.title}>Views</span>
          <span className={s.number}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.title}>Likes</span>
          <span className={s.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
