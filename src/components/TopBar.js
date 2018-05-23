import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExpand from '@fortawesome/fontawesome-free-solid/faExpand';
import faCompress from '@fortawesome/fontawesome-free-solid/faCompress';

class TopBar extends React.Component {
  
  render(){
        
    let expand = <FontAwesomeIcon 
      className="icon"
      icon={faExpand}
                 />;
               
    let compress = <FontAwesomeIcon 
      className="icon none"
      icon={faCompress}
                   />;
     
    return (
      <div className="top-bar">
        <div className="name">
          {this.props.name}
        </div>
        <div 
          className="icons"
          onClick={this.props.toggleClass}
        >
          {expand} 
          {compress}
        </div>
      </div>
    )
  }
}

export default TopBar;