import React from "react";
import marked from "marked";

class Preview extends React.Component {
  
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
  }
  
  rawMarkup(){
    
    if(this.props.editorText){
      
      let text = this.props.editorText;
      let rawMarkup = marked(text, {sanatize: true});
      
      return {__html: rawMarkup };
    }
  }
  render(){
    
  return(
        <span 
          dangerouslySetInnerHTML={this.rawMarkup()}
          id="preview"
        />
        )
      }
  }

export default Preview;