//Adapted from https://github.com/eipex2/nivo-cra/tree/master/src/
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import "./chart.scss"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

var config= {
    keys: [
        "hot dog",
        "burger",
        "sandwich",
        "kebab",
        "fries",
        "donut"
    ],
    margin: {
        "top": 50,
        "right": 130,
        "bottom": 50,
        "left": 60
    },
    defs: [
        {
            "id": "dots",
            "type": "patternDots",
            "background": "inherit",
            "color": "#38bcb2",
            "size": 4,
            "padding": 1,
            "stagger": true
        },
        {
            "id": "lines",
            "type": "patternLines",
            "background": "inherit",
            "color": "#eed312",
            "rotation": -45,
            "lineWidth": 6,
            "spacing": 10
        }
    ],
    fill: [
        {
            "match": {
                "id": "fries"
            },
            "id": "dots"
        },
        {
            "match": {
                "id": "sandwich"
            },
            "id": "lines"
        }
    ],
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "country",
        "legendPosition": "middle",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "food",
        "legendPosition": "middle",
        "legendOffset": -40
    },
    legends: [
        {
            "dataFrom": "keys",
            "anchor": "bottom-right",
            "direction": "column",
            "justify": false,
            "translateX": 120,
            "translateY": 0,
            "itemsSpacing": 2,
            "itemWidth": 100,
            "itemHeight": 20,
            "itemDirection": "left-to-right",
            "itemOpacity": 0.85,
            "symbolSize": 20,
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
}

var data=[
    {
        "country": "AD",
        "hot dog": 40,
        "hot dogColor": "hsl(110, 70%, 50%)",
        "burger": 198,
        "burgerColor": "hsl(54, 70%, 50%)",
        "sandwich": 42,
        "sandwichColor": "hsl(340, 70%, 50%)",
        "kebab": 162,
        "kebabColor": "hsl(192, 70%, 50%)",
        "fries": 106,
        "friesColor": "hsl(238, 70%, 50%)",
        "donut": 104,
        "donutColor": "hsl(180, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 35,
        "hot dogColor": "hsl(230, 70%, 50%)",
        "burger": 17,
        "burgerColor": "hsl(71, 70%, 50%)",
        "sandwich": 186,
        "sandwichColor": "hsl(202, 70%, 50%)",
        "kebab": 198,
        "kebabColor": "hsl(290, 70%, 50%)",
        "fries": 177,
        "friesColor": "hsl(94, 70%, 50%)",
        "donut": 10,
        "donutColor": "hsl(300, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 118,
        "hot dogColor": "hsl(47, 70%, 50%)",
        "burger": 36,
        "burgerColor": "hsl(42, 70%, 50%)",
        "sandwich": 191,
        "sandwichColor": "hsl(343, 70%, 50%)",
        "kebab": 119,
        "kebabColor": "hsl(115, 70%, 50%)",
        "fries": 69,
        "friesColor": "hsl(303, 70%, 50%)",
        "donut": 35,
        "donutColor": "hsl(240, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 142,
        "hot dogColor": "hsl(157, 70%, 50%)",
        "burger": 37,
        "burgerColor": "hsl(168, 70%, 50%)",
        "sandwich": 40,
        "sandwichColor": "hsl(168, 70%, 50%)",
        "kebab": 24,
        "kebabColor": "hsl(212, 70%, 50%)",
        "fries": 189,
        "friesColor": "hsl(85, 70%, 50%)",
        "donut": 44,
        "donutColor": "hsl(215, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 82,
        "hot dogColor": "hsl(122, 70%, 50%)",
        "burger": 70,
        "burgerColor": "hsl(305, 70%, 50%)",
        "sandwich": 188,
        "sandwichColor": "hsl(26, 70%, 50%)",
        "kebab": 150,
        "kebabColor": "hsl(350, 70%, 50%)",
        "fries": 130,
        "friesColor": "hsl(300, 70%, 50%)",
        "donut": 55,
        "donutColor": "hsl(168, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 42,
        "hot dogColor": "hsl(176, 70%, 50%)",
        "burger": 197,
        "burgerColor": "hsl(141, 70%, 50%)",
        "sandwich": 25,
        "sandwichColor": "hsl(278, 70%, 50%)",
        "kebab": 65,
        "kebabColor": "hsl(264, 70%, 50%)",
        "fries": 92,
        "friesColor": "hsl(154, 70%, 50%)",
        "donut": 96,
        "donutColor": "hsl(224, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 69,
        "hot dogColor": "hsl(166, 70%, 50%)",
        "burger": 87,
        "burgerColor": "hsl(70, 70%, 50%)",
        "sandwich": 103,
        "sandwichColor": "hsl(174, 70%, 50%)",
        "kebab": 166,
        "kebabColor": "hsl(165, 70%, 50%)",
        "fries": 2,
        "friesColor": "hsl(328, 70%, 50%)",
        "donut": 48,
        "donutColor": "hsl(152, 70%, 50%)"
    }
]

class BarChart extends React.Component {
    render() {
        return (
        <Card>
            <CardContent>
            <div class="chart">
                Coucou
                <ResponsiveBar
                    data={data}
                    keys={config.keys}
                    indexBy="country"
                    margin={config.margin}
                    padding={0.3}
                    colors="nivo"
                    colorBy="id"
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
                coucou
            </div>
        </CardContent>
    </Card>
    )
    }
}

export default BarChart;