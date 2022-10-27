// import styled from '@emotion/styled'
import PropTypes from "prop-types";
import "./transactionHistory.styled.jsx";

import { Table, Thead, TR, TH, TD } from "./transactionHistory.styled.jsx";

const TransactionHistory = ({ items }) => {
  const transactionsList = items.map(({ id, type, amount, currency }) => (
    <TR key={id}>
      <TD>{type}</TD>
      <TD>{amount}</TD>
      <TD>{currency}</TD>
    </TR>
  ));
  return (
    <Table>
      <Thead>
        <tr>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </Thead>

      <tbody>{transactionsList}</tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
