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
          backgroundColor: "rgb(0, 0, 153)",
          borderColor: "rgb(56, 105, 250)",
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
              display: true,
              position: "left",
              labels: {
                boxWidth: 20,
                usePointStyle: true,
              },
            },
          }}
        />
        <p className="id-label">ID</p>
      </div>
    );
  }
}

export default VoteChart;
