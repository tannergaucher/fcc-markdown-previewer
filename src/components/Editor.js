import React from "react";


class Editor extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      active: false
    };
  }
  
  sendToState(event) {
    this.props.mirrorState(event.target.value)
  }
  
  toggleClass(){
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }
  
  render(){
          
  return(
      <textarea
        className="text-area"
        id="editor"
        onChange={this.sendToState.bind(this)}
        defaultValue={this.props.editorText}
      />
    )
  }
}

export default Editor;