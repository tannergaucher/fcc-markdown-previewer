import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends Component {
  
  constructor(){
    super()
    
    this.mirrorState = this.mirrorState.bind(this);
    this.state = {
      fromEditor: ''
    };
  }
  
  mirrorState(text){
    this.setState({
      fromEditor: text
    });
  }
  
  render() {
    return (
      <div className="App">
        <Editor
          mirrorState={this.mirrorState}
        />
        <Preview/>
      </div>
      );
    }
  }

export default App;
