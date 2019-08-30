import "./bar-chart.scss";

// Adapted from https://github.com/eipex2/nivo-cra/tree/master/src/
import { ResponsiveBar } from "@nivo/bar";
import PropTypes from "prop-types";
import { Component, Fragment } from "react";

class BarChart extends Component {
  reformatResultat = () => {
    const keycols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const { resultat } = this.props;
    const { deciles } = resultat;
    const accResAvant = { refid: "  ", color: "#ded500" };
    //At least on my computer, it seems what makes colors work on mobile is defining them in the data
    //and using colorBy="index" and colors={data.map(c => c.color)} 
    //But on desktop it is using 
    //colors={["#00a3ff","#ff6b6b","#ded500"]}
    //Well, now it seems mobile always work and desktop never does. Cool. 
    const z = deciles.map(element => element.avant);
    const resavant = z.reduce((result, item, index) => {
      // eslint-disable-next-line no-param-reassign
      result[keycols[index]] = Math.round(item / 10000000) / 100;
      return result;
    }, accResAvant);

      
    const accResPLF = {
      /* +Math.round(total.apres/10000000)/100+ "Md€" */
      refid: " ", color: "#ff6b6b",
    };

    const resplf = deciles
      .map(element => element.plf)
      .reduce((result, item, index) => {
        // eslint-disable-next-line no-param-reassign
        result[keycols[index]] = Math.round(item / 10000000) / 100;
        return result;
      }, accResPLF);

    const accResApres = {
      /* +Math.round(total.apres/10000000)/100+ "Md€" */
      refid: "", color: "#00a3ff",
    };

    const resapres = deciles
      .map(element => element.apres)
      .reduce((result, item, index) => {
        // eslint-disable-next-line no-param-reassign
        result[keycols[index]] = Math.round(item / 10000000) / 100;
        return result;
      }, accResApres);
    return [resapres, resplf, resavant];
  };

  render() {
    const { resultat } = this.props;
    const Image = ({ bars }) => {
      const size = 24;
      const images = bars.map(({
        height, key, width, x, y,
      }) => {
        const imageSize = width > 15 ? size : 0;
        const imagePosX = x + width / 2 - size / 2;
        const imagePosY = y + height / 2 - size / 2;
        const decileImageKey = key.substring(0, key.indexOf("."));
        const xlinkHref = `/static/images/decile${decileImageKey}.png`;
        return (
          // const iddecile=key.substring(0,key.indexOf(".")
          <image
            key={key}
            alt=""
            height={imageSize}
            width={imageSize}
            x={imagePosX}
            xlinkHref={xlinkHref}
            y={imagePosY}
          />
        );
      });
      return <g>{images}</g>;
    };

    const keycols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const data = this.reformatResultat();
    return (
      <div className="chart">
        <ResponsiveBar
          height={185} 
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
          colors={["#00a3ff","#ff6b6b","#ded500"]} 
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
            bottom: 30,
            left: 20,
            right: 10,
            top: 20,
          }}
          motionDamping={15}
          motionStiffness={90}
          padding={0.05}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#B1B1B1",
                  fontFamily: "Lato",
                  fontSize: "0.7em",
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
          tooltip={content => (
            <Fragment>
              {"Total"}
              {" "}
              <img
                alt="Deciles de la population"
                height="30"
                src={`/static/images/decile${content.id}.png`}
                width="30"
              />
              {`décile : ${Math.round(content.value * 10) / 10}Md€`}
              <br />
              {`${Math.round(
                (content.value * 1000000000)
                  / resultat.deciles[content.id - 1].poids,
              )}€ par foyer fiscal`}
            </Fragment>
          )}
        />
      </div>
    );
  }
}

BarChart.propTypes = {
  resultat: PropTypes.shape().isRequired,
};

export default BarChart;
