import React from 'react'
import '../scss/custom.scss'

function ContactInfoCard(props) {



  if( props.active === props.cardID ) {
    return (
      <div className="card-body">
        <h5 className="card-title"><u>{props.title}</u></h5>
        <p className="card-text" >
          {props.children}
        </p>
      </div>
    )
  }
  return (
    <div />
  );
}



export default ContactInfoCard;