import PropTypes from "prop-types";
import "./friendList.styled.jsx";

import {
  FriendsList,
  FriendItem,
  IsOnline,
  IsOfline,
} from "./friendList.styled.jsx";

const FriendList = ({ friends }) => {
  const friendsItems = friends.map(({ id, isOnline, avatar, name }) => (
    <FriendItem key={id}>
      {isOnline ? <IsOnline /> : <IsOfline />}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  ));
  return <FriendsList>{friendsItems}</FriendsList>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
