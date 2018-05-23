import React from "react";
import TopBar from "./TopBar";


class Editor extends React.Component {
  

  sendToState(event) {
    this.props.mirrorState(event.target.value)
  }
  
  
  render(){
          
  return(
    
    <div 
      className="page"
      id="editor"
    >
      <TopBar 
        name={"Editor"}
        toggleClass={this.props.toggleClass}
      />

      <textarea
        className="text-area"
        id="editor"
        onChange={this.sendToState.bind(this)}
        defaultValue={this.props.editorText}
      />
    </div>
  
    )
  }
}

export default Editor;