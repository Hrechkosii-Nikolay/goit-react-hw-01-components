import styled from "@emotion/styled";

export const FriendsList = styled.ul`
  list-style: none;
  margin: 100px 0 100px 100px;
`;
export const FriendItem = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  width: 200px;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const IsOnline = styled.span`
  background-color: #01ff38c3;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const IsOfline = styled.span`
  background-color: #ff0000b6;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
