import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAdjust from '@fortawesome/fontawesome-free-solid/faAdjust';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';

class TopBar extends React.Component {
  
  render(){
      
    return (
      <div className="top-bar">
        <div className="name">
          {this.props.name}
        </div>
        <div className="icons">
          <div 
            className="icon"
            onClick={this.props.handleClick}
          >
            <FontAwesomeIcon 
              id="compress"
              icon={faCircle}
            />
          </div>
          <div 
            className="icon"
            onClick={this.props.handleClick}
          >
            <FontAwesomeIcon 
              id="page"
              icon={faAdjust}
            />
          </div>
          <div 
            className="icon"
            onClick={this.props.handleClick}
          >
            <FontAwesomeIcon 
              id="expand"
              icon={faCircle}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar;