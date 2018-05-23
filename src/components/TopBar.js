import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExpand from '@fortawesome/fontawesome-free-solid/faExpand';
import faCompress from '@fortawesome/fontawesome-free-solid/faCompress';

class TopBar extends React.Component {
  
  render(){
        
    let expand = <FontAwesomeIcon 
      id="expand"
      className="icon"
      icon={faExpand}
      onClick={this.props.handleClick}
                 />;
               
    let compress = <FontAwesomeIcon 
      id="compress"
      className="icon"
      icon={faCompress}
      onClick={this.props.handleClick}

                   />;
     
    return (
      <div className="top-bar">
        <div className="name">
          {this.props.name}
        </div>
        <div 
          className="icons"
        >
          {expand} 
          {compress}
        </div>
      </div>
    )
  }
}

export default TopBar;