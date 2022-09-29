import css from './FriendListItem.module.scss';
import { friendsProps } from './FriendList';
// import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }: friendsProps) => {

    return <li className={css.item} key={id}>
        <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }} > {' '} </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
</li>
}

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };