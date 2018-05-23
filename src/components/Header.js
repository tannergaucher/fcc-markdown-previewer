import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFreeCodeCamp from '@fortawesome/fontawesome-free-brands/faFreeCodeCamp';

class Header extends React.Component {
  
  render(){  
  return(
    <div className="header">
      <FontAwesomeIcon
        icon={faFreeCodeCamp}
      />
      <p>FCC Markdown Previewer</p>
    </div>
    )
  }
}

export default Header;