import React from 'react'
import '../scss/custom.scss'


function ContactInfoTag(props) {

  function handleClick(e) {
    e.preventDefault();
    props.changeTab(props.tagID)
    }

  if( props.active === props.tagID ) {
    return (
      <li className="nav-item">
        <a href='/#' className="nav-link active" onClick={handleClick}>{props.title}</a>
      </li>
    )
  }
  return (
          <li className="nav-item">
            <a href='/#' className="nav-link" onClick={handleClick}>{props.title}</a>
          </li>
          
  );
}



export default ContactInfoTag;