import React from "react";
import Paper from "@material-ui/core/Paper";
import { Chart, LineSeries } from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, area } from "d3-shape";

const demoStyles = () => ({
  chart: {
    paddingRight: "20px",
    backgroundColor: "#041C32",
  },
});
const Line = (props) => {
  console.log(props);
  return (
    <LineSeries.Path
      {...props}
      path={area()
        .x(({ arg }) => arg)
        .y1(({ val }) => val)
        .y0(({ startVal }) => startVal)
        .curve(curveCatmullRom)}
      color="#d6a502"
    />
  );
};

const LineChart = (props) => {
  console.log(props);

  const { data: chartData } = props;
  const { classes } = props;
  console.log(classes);
  return (
    <Paper
      style={{
        backgroundColor: "inherit",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <Chart
        data={chartData}
        className={classes.chart}
        height={100}
        width={200}
        style={{ margin: "auto" }}
      >
        <LineSeries
          valueField="googlePlay"
          argumentField="month"
          seriesComponent={Line}
        />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default withStyles(demoStyles, { name: "LineChart" })(LineChart);
