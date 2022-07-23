import { FriendListItem } from "./FriendListItem"
export const FriendList = ({ friends }) => {
    return (
        <FriendList>
            {friends.map(friend => 
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />)} 
        </FriendList>
        
        
    )

}
 


// <ul class="friend-list">
//   <!-- Довільна кіл-сть FriendListItem -->
// </ul>
