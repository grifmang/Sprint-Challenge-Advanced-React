import React from 'react';
import axios from "axios";
import './App.css';
import DataCard from "./components/DataCard";
import Buttons from "./components/Buttons";

class App extends React.Component {

  // const [darkMode, setDarkMode] = useDarkMode(false);
  
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

  toggleMode = e => {
    e.preventDefault();
    this.setState({darkMode: !this.state.darkMode});
  };

  render() {
    return (
      <>
      <Buttons />
      <div className="container">
        {this.state.data.map(element => {
          return <DataCard
          name={element.name}
          key={element.id}
          country={element.country}
          searches={element.searches} />
        })}
      </div>
      </>
    );
  }
}

export default App;
