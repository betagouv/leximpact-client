//Adapted from https://github.com/eipex2/nivo-cra/tree/master/src/
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"


class BarChart extends React.Component {

    constructor(props) {
        super(props)
        this.reformatResultat = this.reformatResultat.bind(this)
    }

    reformatResultat(){
        const keycols= ['1','2','3','4','5','6','7','8','9','10']
        const {total, deciles}=this.props.resultat
        const z=deciles.map((element) => element.avant)
        console.log("mon z",deciles, z)
        const stavant = {"refid" : " "}
        const resavant=z.reduce(function(result, item, index, array) {
            result[keycols[index]] = Math.round(item/10000000)/100;  
            return result;
          }, stavant)
        console.log(resavant)
        const stapres = {"refid" : ""/*+Math.round(total.apres/10000000)/100+ "Md€"*/}
        const resapres=deciles.map((element) => element.apres).reduce(function(result, item, index, array) {
            result[keycols[index]] = Math.round(item/10000000)/100; 
            return result;
          }, stapres)
        console.log([resapres,resavant])
        return [resapres,resavant]
    }

    

    render() {
        const Image = ({ bars }) => {
            let size = 24
            let images = bars.map(({ key, x, y, width, height }) => {
                console.log( key, key.substring(0,key.indexOf(".")), x, y, width, height)
                //const iddecile=key.substring(0,key.indexOf(".")
              return (
                <image
                  key={key}
                  xlinkHref={"../static/images/decile"+key.substring(0,key.indexOf("."))+".png"}
                  x={x + width / 2 - size / 2}
                  y={y + height / 2 - size / 2}
                  height={width>15?size:0}
                  width={width>15?size:0}
                />
              )
            })
            return <g>{images}</g>
          }
        const keycols= ['1','2','3','4','5','6','7','8','9','10']
        const data=this.reformatResultat()
        return (<div class="chart">
                    <ResponsiveBar
                layers={['grid','axes','bars', Image, 'markers','legends', 'annotations' ]}
                data={data}
                keys={keycols}
                /* */
                indexBy="refid"
                margin={{ top: 20, right: 10, bottom: 30, left: 20 }}
            padding={0.05}
            colorBy="index"
            innerPadding={3}
            layout="horizontal"
            colors={['#00a3ff','#ded500']}
            tooltip={(content,event)=>{
              return(
                <>
                {"Total"} <img src={"../static/images/decile"+content.id+".png"} width="30" height="30" />
                {"décile : "+Math.round(content.value*10)/10+"Md€"}
                <br/>
                {Math.round(content.value*1000000000/this.props.resultat.deciles[content.id-1].poids)+"€ par foyer fiscal"}</>)}}
            defs={[]}
            fill={[]}
            borderRadius={4}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisLeft={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 7,
                tickRotation: 0,
                legend: "Volume des recettes de l'IR en Md€",
                legendPosition: 'middle',
                legendOffset: 41
            }}
            axisRight={{
                tickSize: 0
            }}
            enableGridX={true}
            enableGridY={false}
            labelFormat={(v)=>{return(v+"Md€")}}
            labelSkipWidth={1000}
            labelSkipHeight={1000}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            theme={{        
              axis: {
                ticks: {
                  text: {
                  fontFamily: "Lato",
                  fontSize: "0.7em",
                  fill: "#B1B1B1"
                  }
                }
              },
            tooltip:{
                container: {
                    background: "#565656",
                    color: "#ffffff",
                    fontFamily: "Lato"
                }
            }
            }}
        />
      </div>
     )
    }
}

export default BarChart;