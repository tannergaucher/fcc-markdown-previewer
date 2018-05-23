import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import sampleText from "../src/sampleText"

class App extends Component {
  
  constructor(){
    super()
    this.mirrorState = this.mirrorState.bind(this);
    this.state = {
      text: sampleText
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
        <Header/>
        <div className="pages">

          <Editor
            mirrorState={this.mirrorState}
            editorText={this.state.text}
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