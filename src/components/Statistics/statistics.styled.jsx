import styled from "@emotion/styled";

export const StatisticCard = styled.section`
  --white-color: #ffffff;
  --black-tp-color: rgba(28, 27, 27, 0.141);

  background-color: var(--black-tp-color);
  padding: 50px;
  display: inline-block;
  width: 400px;
  margin-left: 100px;

  border-radius: 10px;
`;

export const TitleStatistics = styled.h2`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  padding: 30px 20px;
  background-color: var(--white-color);
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;

export const StatisticItem = styled.li`
  padding: 5px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 20%;
  color: var(--white-color);
`;
