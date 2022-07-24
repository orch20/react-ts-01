import { FriendListItem } from './FriendListItem.jsx'
import css from './FriendList.module.scss'
import PropTypes from 'prop-types'


export const FriendList = ({ friends }) => {
    return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};