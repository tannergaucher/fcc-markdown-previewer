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
  
  windowSize(window){
    this.setState({
      window
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
          <div 
            className="page" 
            id="editor"
          >
            <TopBar
              name={"Editor"}
            />
            <Editor
              mirrorState={this.mirrorState}
              editorText={this.state.text}
            />
          </div>
          <div className="page" id="preview">
            <TopBar
              name={"Preview"}
            />
            <div className="text-area">
              <Preview
                editorText={this.state.text}
              />
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

export default App;