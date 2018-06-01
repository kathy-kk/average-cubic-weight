import React, { Component } from "react";
import fetchData from "./service";
import averageWeight from "./averageWeight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      average: 0
    };
  }
  componentDidMount() {
    fetchData("Air Conditioners").then(objects_of_category => {
      const average = averageWeight(objects_of_category);
      this.setState({
        average: average.toFixed(4)
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Average Weight:</h1>
        <h2>{`${this.state.average}Kg`}</h2>
      </div>
    );
  }
}
export default App;
