import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMaximum = Math.max(
    ...props.monthDatas.map((monthData) => monthData.value)
  );

  return (
    <div className="chart">
      {props.monthDatas.map((monthData) => {
        return (
          <ChartBar
            key={monthData.label}
            value={monthData.value}
            maxValue={totalMaximum}
            label={monthData.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
