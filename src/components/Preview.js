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
      <div className="preview views">
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

export default Preview;