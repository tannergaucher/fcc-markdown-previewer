import React from "react";
import marked from "marked";
import TopBar from "./TopBar";

class Preview extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      view: "page"
    }
    
    this.rawMarkup = this.rawMarkup.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  rawMarkup(){
    
    if(this.props.editorText){
      let text = this.props.editorText;
      let rawMarkup = marked(text, {sanatize: true});
      
      return {__html: rawMarkup };
    }
  }
  
  handleClick(e){
    let icon = e.target.id;
    console.log(e.target.id)
    this.setState({view: icon})
  }
  
  render(){
    
  return(
    <div className={this.state.view}>
      <TopBar 
        name={Preview}
        handleClick={this.handleClick}
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