import css from './Portfolio.module.scss';
import PropTypes from 'prop-types';

export const Portfolio = ({ userInfo }) => {
    return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={userInfo.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{userInfo.username}</p>
    <p className={css.tag}>{"@" + userInfo.tag}</p>
    <p className={css.location}>{userInfo.location}</p>
        </div>
        <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{userInfo.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{userInfo.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{userInfo.stats.likes}</span>
    </li>
  </ul>
    </div>
}

Portfolio.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
  })
}

