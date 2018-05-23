import React, { Component } from 'react';
import './App.css';
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import TopBar from "./components/TopBar"
// import sampleText from "../src/sampleText"

class App extends Component {
  
  constructor(){
    super()
    this.mirrorState = this.mirrorState.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      text: "# Test",
      active: false
    };
  }
  
  mirrorState(text){
    this.setState({
      text
    });
  }
  
  toggleClass(){
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="pages">

          <Editor
            mirrorState={this.mirrorState}
            editorText={this.state.text}
            active={this.state.active}
            toggleClass={this.toggleClass}
          />

          <Preview
            editorText={this.state.text}
            active={this.state.active}
            toggleClass={this.toggleClass}
          />

        </div>
      </div>
      );
    }
  }

export default App;