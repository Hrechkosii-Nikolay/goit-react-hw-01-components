import PropTypes from "prop-types";
import "./statistics.styled.jsx";

import {
  StatisticCard,
  TitleStatistics,
  StatisticList,
  StatisticItem,
} from "./statistics.styled.jsx";

const Statistics = ({ stats }) => {
  const items = stats.map(({ id, label, percentage, color }) => (
    <StatisticItem key={id} style={{ backgroundColor: `${color}` }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticItem>
  ));
  return (
    <StatisticCard>
      <TitleStatistics>Upload stats</TitleStatistics>
      <StatisticList>{items}</StatisticList>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string,
    })
  ),
};
export default Statistics;
