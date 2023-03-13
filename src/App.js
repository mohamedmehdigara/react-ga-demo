import React, { Component } from "react";
import "./App.css";
import ReactGA from 'react-ga';
 
 
class App extends Component {
  setGA = () => {
    ReactGA.initialize('UA-xxxxxx-xx');
    ReactGA.pageview('Init page view');
  };
 
  componentDidMount(){
    this.setGA();
  }
 
  render() {
    return (
      <div className="App">
        <h2>React Google Analytics Example</h2>
      </div>
    );
  }
}
 
export default App;