import React from "react";
import { Line } from "react-chartjs-2";

import "./VoteChart.css";

class VoteChart extends React.Component {
  render() {
    let objectIdData = [];
    let voteCountData = [];
    if (this.props.hits) {
      for (let i = 0; i < this.props.hits.length; i++) {
        if (!this.props.hits[i].hide) {
          objectIdData.push(this.props.hits[i].objectID);
          voteCountData.push(this.props.hits[i].points);
        }
      }
    }
    let chartData = {
      labels: objectIdData,
      datasets: [
        {
          label: "VOTES",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: voteCountData,
        },
      ],
    };
    return (
      <div className="chart-container">
        <Line
          data={chartData}
          options={{
            title: {
              display: true,
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    );
  }
}

export default VoteChart;
