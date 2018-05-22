import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends Component {
  
  constructor(){
    super()
    
    this.mirrorState = this.mirrorState.bind(this);
    this.state = {
      editor: ''
    };
  }
  
  mirrorState(text){
    this.setState({
      text
    });
  }
  
  render() {
    return (
      <div className="App">
        <Editor
          mirrorState={this.mirrorState}
        />
        <Preview
          editorText={this.state.text}
        />
      </div>
      );
    }
  }

export default App;