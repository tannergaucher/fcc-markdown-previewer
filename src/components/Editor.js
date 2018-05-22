import React from "react";

class Editor extends React.Component {
  
  sendToState(event) {
    this.props.mirrorState(event.target.value)
  }

  render(){
    
  return(
      <textarea
        className="editor views"
        onChange={this.sendToState.bind(this)}
      />
    )
  }
}

export default Editor;