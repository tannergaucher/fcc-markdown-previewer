import React from "react";
import TopBar from "./TopBar"

class Editor extends React.Component {
  
  sendToState(event) {
    this.props.mirrorState(event.target.value)
  }

  render(){
          
  return(
    <div className="page">

      <TopBar></TopBar>
      <textarea
        className="text-area"
        id="editor"
        onChange={this.sendToState.bind(this)}
        defaultValue={this.props.editorText}

      ></textarea>
    </div>
    )
  }
}

export default Editor;