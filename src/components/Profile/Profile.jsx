import PropTypes from "prop-types";

import {
  Card,
  StatsList,
  StatCard,
  Description,
  UserImg,
  Libel,
  Quantity,
  UserInfo,
  UserInfoName,
} from "./profile.styled";

const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Description>
        <UserImg src={avatar} alt="User avatar" className="avatar" />
        <UserInfoName>{username}</UserInfoName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>
      <StatsList>
        <StatCard key={followers}>
          <Libel>Followers</Libel>
          <Quantity>{followers}</Quantity>
        </StatCard>
        <StatCard key={views}>
          <Libel>Views</Libel>
          <Quantity>{views}</Quantity>
        </StatCard>
        <StatCard key={likes}>
          <Libel>Likes</Libel>
          <Quantity>{likes}</Quantity>
        </StatCard>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
