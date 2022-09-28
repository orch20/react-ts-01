import { FriendListItem } from './FriendListItem';
// import css from './FriendList.module.scss';
// import PropTypes from 'prop-types'
interface FriendsListProps {
  friends: any;
}

export interface friendsProps {
  id?: string;
  isOnline: boolean;
  name: string;
  avatar: string;
}
export const FriendList = ({ friends }:FriendsListProps ) => {
  return (
    <ul >
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
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
