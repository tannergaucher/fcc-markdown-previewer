import React from "react";
import marked from "marked";
import TopBar from "./TopBar";

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
    <div className="page" id="preview">
      <TopBar 
        name={Preview}
        toggleClass={this.props.toggleClass}
      />
      <div className="text-area">
        <span 
          dangerouslySetInnerHTML={this.rawMarkup()}
          id="preview"
        />
      </div>

    </div>
      )
      }
  }

export default Preview;