import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";

class App extends Component {
  
  constructor(){
    super()
    
    this.mirrorState = this.mirrorState.bind(this);
    this.state = {
      preview: ''
    };
  }
  
  mirrorState(text){
    this.setState({
      text
    });
  }
  
  windowSize(window){
    this.setState({
      window
    });
  }  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="pages">
          <Editor
            mirrorState={this.mirrorState}
          />
          <Preview
            editorText={this.state.text}
          />
        </div>
      </div>
      );
    }
  }

export default App;