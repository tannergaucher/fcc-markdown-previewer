import React from "react";
import TopBar from "./TopBar"

class Editor extends React.Component {
  
  sendToState(event) {
    this.props.mirrorState(event.target.value)
  }
  
  render(){
    
  let def = "test";
    
  return(
    <div className="page">
      <TopBar>
        <div></div>
      </TopBar>
      <textarea
        className="text-area"
        onChange={this.sendToState.bind(this)}
      >{def}</textarea>
    </div>
    )
  }
}

export default Editor;