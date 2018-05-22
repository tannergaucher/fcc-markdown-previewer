import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExpand from '@fortawesome/fontawesome-free-solid/faExpand';
import faCompress from '@fortawesome/fontawesome-free-solid/faCompress';

class TopBar extends React.Component {

  render(){
        
    let expand = <FontAwesomeIcon 
      className="icon none"
      icon={faExpand}
                 />;
               
    let compress = <FontAwesomeIcon 
      className="icon none"
      icon={faCompress}
                   />;
    
               
                 
        return (
        <div className="top-bar">
          {expand} 
          {compress} 
          <div className="name"></div>
        </div>
      )
    
  }
}

export default TopBar;