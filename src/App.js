import React, { Component } from 'react';
import MyChart from "./mycomponents/charts"
import './App.css';
import { thisTypeAnnotation } from '@babel/types';

class App extends Component {
  state = {  
    CO2Emission: [],
    indexYear: 0

  };

  async componentDidMount() {
    const url ="https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const Response = await fetch(url);
    const data = await Response.json();

    this.setState({ CO2Emission: data });
  }

 handleYearFilter=(Year)=>{
   let index = this.state.CO2Emission.findIndex(
     co2=>co2.Year === parseInt(Year)
   );
   if (index !== -1)
   {
     this.setState({ indexYear: index });

   }
   else{
     alert("Året som du har sökt går inte att söka på");
   }
 };
  render() { 
    return ( 
      <div className="App">
        <h1>Statistik CO2</h1>
<MyChart CO2Emission={this.state.CO2Emission[this.state.indexYear]}
onYearFilter={this.handleYearFilter}
></MyChart>
      </div>
     );
  }
}
 
export default App;
