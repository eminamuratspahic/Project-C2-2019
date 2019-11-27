import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class MyChart extends Component {
  state = {  }

  handleYear = e =>{
    if(e.key === "Enter")
    {
      this.props.onYearFilter(e.target.value);
      
    }
  }
  render() {
    
    let co2 = this.props.CO2Emission;
    if(co2 === undefined) return <p> Det finns ingen information.</p>

    const dataBarChart = [
      {name: 'Year', value: co2["Year"] },
      {name: 'Total', value: co2["Total"] },
      {name: 'Gas Fuel', value: co2["Gas Fuel"] },
      {name: 'Liquid Fuel', value: co2["Liquid Fuel"] },
      {name: 'Solid Fuel', value: co2["Solid Fuel"] },
      {name: 'Cement', value: co2["Cement"]},
      {name: 'Gas Flaring', value: co2["Gas Flaring"]}
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return ( 
      <div style={{width:"350px",height:"400px",float:"left"}}>
      <input type="text" placeholder="Årtal..." onKeyDown={e=> this.handleYear(e)}></input>
            <BarChart width={600} 
      height={300} 
      data={dataBarChart}
      dataKey="value"
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
 <CartesianGrid strokeDasharray="3 3"/>
 <XAxis dataKey="name"/>

 <YAxis/>
 <Tooltip/>
 <Legend />
 <Bar dataKey="value">
  <Cell fill={COLORS[0]}/> 
           <Cell fill={COLORS[1]}/>
           <Cell fill={COLORS[2]}/>
           <Cell fill= {COLORS[3]}/>
 </Bar>
</BarChart>
</div>
     );
  }
}
 
export default MyChart;
