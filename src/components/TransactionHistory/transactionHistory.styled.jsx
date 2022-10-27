import styled from "@emotion/styled";

export const Table = styled.table`
  --bg-color: #33b6b4b8;
  min-width: 700px;

  border-radius: 5px;
  overflow: hidden;

  margin: 20px 0 100px 100px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.368);
`;

export const Thead = styled.thead`
  color: #ffff;
  background-color: var(--bg-color);
`;

export const TR = styled.tr`
  background-color: #84848426;
  &:nth-of-type(odd) {
    background-color: #ffff;
  }
`;

export const TH = styled.th`
  padding: 10px;
`;
export const TD = styled.td`
  padding: 10px;
  text-align: center;
  color: #918b8b;
`;
