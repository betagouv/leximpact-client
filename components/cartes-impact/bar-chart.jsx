// Adapted from https://github.com/eipex2/nivo-cra/tree/master/src/
import { ResponsiveBar } from "@nivo/bar";
import React from "react";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.reformatResultat = this.reformatResultat.bind(this);
  }

  reformatResultat() {
    const keycols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const { deciles, total } = this.props.resultat;
    const z = deciles.map(element => element.avant);
    const stavant = { refid: " " };
    const resavant = z.reduce((result, item, index, array) => {
      result[keycols[index]] = Math.round(item / 10000000) / 100;
      return result;
    }, stavant);
    const stapres = {
      refid: "" /* +Math.round(total.apres/10000000)/100+ "Md€" */,
    };
    const resapres = deciles
      .map(element => element.apres)
      .reduce((result, item, index, array) => {
        result[keycols[index]] = Math.round(item / 10000000) / 100;
        return result;
      }, stapres);
    return [resapres, resavant];
  }

  render() {
    const Image = ({ bars }) => {
      const size = 24;
      const images = bars.map(({
        height, key, width, x, y,
      }) => (
        // const iddecile=key.substring(0,key.indexOf(".")
        <image
          key={key}
          height={width > 15 ? size : 0}
          width={width > 15 ? size : 0}
          x={x + width / 2 - size / 2}
          xlinkHref={`../static/images/decile${key.substring(
            0,
            key.indexOf("."),
          )}.png`}
          y={y + height / 2 - size / 2}
        />
      ));
      return <g>{images}</g>;
    };
    const keycols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const data = this.reformatResultat();
    return (
      <div className="chart">
        <ResponsiveBar
          animate
          enableGridX
          axisBottom={{
            legend: "Volume des recettes de l'IR en Md€",
            legendOffset: 41,
            legendPosition: "middle",
            tickPadding: 7,
            tickRotation: 0,
            tickSize: 5,
          }}
          /* */
          axisLeft={null}
          axisRight={{
            tickSize: 0,
          }}
          axisTop={null}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          borderRadius={4}
          colorBy="index"
          colors={["#00a3ff", "#ded500"]}
          data={data}
          defs={[]}
          enableGridY={false}
          fill={[]}
          indexBy="refid"
          innerPadding={3}
          keys={keycols}
          labelFormat={v => `${v}Md€`}
          labelSkipHeight={1000}
          labelSkipWidth={1000}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          layers={[
            "grid",
            "axes",
            "bars",
            Image,
            "markers",
            "legends",
            "annotations",
          ]}
          layout="horizontal"
          legends={[]}
          margin={{
            top: 20,
            right: 10,
            bottom: 30,
            left: 20,
          }}
          motionDamping={15}
          motionStiffness={90}
          padding={0.05}
          theme={{
            axis: {
              ticks: {
                text: {
                  fontFamily: "Lato",
                  fontSize: "0.7em",
                  fill: "#B1B1B1",
                },
              },
            },
            tooltip: {
              container: {
                background: "#565656",
                color: "#ffffff",
                fontFamily: "Lato",
              },
            },
          }}
          tooltip={(content, event) => (
            <React.Fragment>
              {"Total"}
              {" "}
              <img
                height="30"
                src={`../static/images/decile${content.id}.png`}
                width="30"
              />
              {`décile : ${Math.round(content.value * 10) / 10}Md€`}
              <br />
              {`${Math.round(
                (content.value * 1000000000)
                  / this.props.resultat.deciles[content.id - 1].poids,
              )}€ par foyer fiscal`}
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default BarChart;
