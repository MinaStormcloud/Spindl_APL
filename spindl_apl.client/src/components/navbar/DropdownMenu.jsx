import React from "react";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
      <li><a href="/" onClick={()=>this.handleLinkClick()}>Home</a></li>
        <li><a href="/about" onClick={()=>this.handleLinkClick()}>About</a></li>
        <li><a href="/contact" onClick={()=>this.handleLinkClick()}>Contact</a></li>
        <li><a href="/subscribe" onClick={()=>this.handleLinkClick()}>Newsletter</a></li>
        <li><a href="/privacy" onClick={()=>this.handleLinkClick()}>Privacy</a></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;