import React, { useState } from 'react'
import '../scss/custom.scss'
import ContactInfoTag from './contactInfoTag.js'
import ContactInfoCard from './contactInfoCard.js'

function ContactInfo() {

  const [tab, setTab] = useState(1);

  return (
    <div className="card text-center">
        <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <ContactInfoTag title='At Work' tagID={1} active={tab} changeTab={setTab} />
          <ContactInfoTag title='At Home' tagID={2} active={tab} changeTab={setTab} />
        </ul>
      </div>
      <ContactInfoCard title='Contact Me At Work' active={tab} cardID={1}>
        Email: clapperk@mit.edu <br /><br/>
        Phone: +1 (617) 253 4211, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp; +1 (‪339) 545-1521‬<br/><br/>
        Address: NW12 <br/>
        138 Albany Street <br/>
        Cambridge, MA 02139
        <br /><br/>
        <a href="https://nrl.mit.edu/" className="btn btn-primary">My Work</a>
      </ContactInfoCard>
      <ContactInfoCard title='Catch Me At Home' active={tab} cardID={2}>
        If you need my personal contact info, please send an email to contact@kyleclapper.com
        <br /><br/>
        <a href="mailto:contact@kyleclapper.com" className="btn btn-primary">Request Personal Line</a>
      </ContactInfoCard>
    </div>

  );
}



export default ContactInfo;