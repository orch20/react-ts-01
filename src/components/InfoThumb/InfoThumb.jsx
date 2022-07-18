import css from './InfoThumb.module.css';
import PropTypes from 'prop-types';

export const InfoThumb = ({ userInfo }) => {
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
        <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
    </div>
}

InfoThumb.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
    // stats: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.number.isRequired, quantity: PropTypes.string.isRequired })   ).isRequired
}

