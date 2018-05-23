import React from "react";
import TopBar from "./TopBar";

class Editor extends React.Component {
  
  constructor(){
    super()
    this.state = {
      view: "page"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  sendToState(event) {
    this.props.mirrorState(event.target.value)
  }
  
  handleClick(e){
    let icon = e.target.id;
    this.setState({view: icon})
  }

  render(){
          
  return(
    
    <div 
      className={this.state.view}
      id="editor"
    >
      <TopBar 
        name={"Editor"}
        toggleClass={this.props.toggleClass}
        handleClick={this.handleClick}
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