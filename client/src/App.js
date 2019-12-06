import React from 'react';
import axios from "axios";
import './App.css';
import DataCard from "./components/DataCard";

class App extends React.Component {

  state = {
    data: []
  }


  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({data: response.data});
        console.log(this.state.data);
        })
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map(element => {
          return <DataCard
          name={element.name}
          key={element.id}
          country={element.country}
          searches={element.searches} />
        })}
      </div>
    );
  }
}

export default App;
