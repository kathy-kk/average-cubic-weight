import React, { Component } from "react";
import fetchData from "./fetchData";
import averageWeight from "./averageWeight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      average: 0,
      error: null
    };
  }
  componentDidMount() {
   this.updateAverageWeight()
  }

  async updateAverageWeight() {
    try{
      const objects_of_category = await fetchData("Air Conditioners");
      const average = averageWeight(objects_of_category);
      this.setState({
        average: average.toFixed(4),
        error: null
      });
     }catch(error){
       this.setState({
         error: 'something is wrong'
       })
     }
    }
  render() {
    return (
      <div>
        <h1>Average Weight:</h1>
        <h2>{ this.state.error? this.state.error:`${this.state.average}Kg`}</h2>
      </div>
    );
  }
}
export default App;
