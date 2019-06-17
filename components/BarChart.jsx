//Adapted from https://github.com/eipex2/nivo-cra/tree/master/src/
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import "./chart.scss"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"



class BarChart extends React.Component {

    constructor(props) {
        super(props)
        this.reformatResultat = this.reformatResultat.bind(this)
    }

    reformatResultat(){
        const keycols= [ '1er décile', '2ème décile', '3ème décile', '4ème décile', '5ème décile', '6ème décile','7ème décile', '8ème décile', '9ème décile', '10ème décile']
        const {total, deciles}=this.props.resultat
        const z=deciles.map((element) => element.avant)
        console.log("mon z",deciles, z)
        const stavant = {"refid" : "Avant :"+Math.round(total.avant/10000000)/100 + "Md€"}
        const resavant=z.reduce(function(result, item, index, array) {
            result[keycols[index]] = item/1000000000; 
            return result;
          }, stavant)
        console.log(resavant)
        const stapres = {"refid" : "Après :"+Math.round(total.apres/10000000)/100+ "Md€"}
        const resapres=deciles.map((element) => element.apres).reduce(function(result, item, index, array) {
            result[keycols[index]] = item/1000000000; 
            return result;
          }, stapres)
        console.log([resapres,resavant])
        return [resapres,resavant]
    }

    render() {
        console.log("mon new res est",this.props.resultat)
        
        const keycols= [ '1er décile', '2ème décile', '3ème décile', '4ème décile', '5ème décile', '6ème décile','7ème décile', '8ème décile', '9ème décile', '10ème décile']
        const data=this.reformatResultat()
        return (<div class="chart">
                    <ResponsiveBar
                data={data}
                keys={keycols}
                /* */
                indexBy="refid"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.15}
            colorBy="index"
            innerPadding={3}
            layout="horizontal"
            colors={['#00a3ff','#ded500']}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
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
            labelFormat=".2f"
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
            {/*  <ResponsiveBar
                    data={data}
                    keys={config.keys}
                    indexBy="country"
                    margin={config.margin}
                    padding={0.3}
                    colors="nivo"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                />
            coucou*/}
            </div>
     )
    }
}

export default BarChart;