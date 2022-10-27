import styled from "@emotion/styled";

export const Card = styled.div`
  --main-text: #0f0e0e;
  --ligth-text: #5d5858;
  --bg-color: #6459c6;
  --border-color: #c6bebe;
  color: var(--main-text);
  width: 250px;
  border: 1px solid var(--border-color);
  border-radius: 10px;

  margin: 20px 0 100px 100px;
  overflow: hidden;
`;

export const StatsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

export const StatCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-basis: calc(100% / 3);
  border-top: 1px solid var(--border-color);
  padding: 10px 0px;
  background-color: var(--bg-color);
  &:not(:last-child) {
    border-inline-end: solid 1px var(--border-color);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;
`;

export const UserImg = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 15px;
  border-radius: 50%;
  border: 5px solid var(--bg-color);
  padding: 5px;
`;

export const Libel = styled.span`
  color: white;
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: white;
`;

export const UserInfo = styled.p`
  margin: 0;
  color: var(--ligth-text);
`;
export const UserInfoName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
`;
