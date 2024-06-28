import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



export default function ExpandableBar({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`bar-container ${toggle ? 'open' : ''}`}>
      <div className="bar" onClick={() => setToggle(!toggle)}>
        <div className='title'>
          <h3>{title}</h3>
          <FontAwesomeIcon icon={faChevronUp} className={`arrow ${toggle ? 'rotateDown' : 'rotateUp'}`} />
        </div>
      </div>
      {toggle && (
        <div className='expandable-text'>
          {Array.isArray(content) ? content.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          }) : <p>{content}</p>}
        </div>
      )}
    </div>
  )
}