import React from "react";

class Editor extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      editor: 'test test'
    };
  }
  
  updateEditor(event) {
    // console.log("typing")
    // console.log(event.target.value)
    this.setState({editor: event.target.value})
  }
  
  
  render(){
    
    return(
        <textarea 
          className="editor views" 
          value={this.state.editor}
          onChange={this.updateEditor.bind(this)}

        />
    )
  }
}

export default Editor;