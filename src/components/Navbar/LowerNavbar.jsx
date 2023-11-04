import React from 'react'
import './LowerNavStyle.css'

const LowerNavbar = () => {
  return (
    <div className='Lower-Nav-main-div'>
        <div className='Lower-Nav-Sub-div'>
            <h6><i className="fa-solid fa-circle-info Lower-Nav-info"></i>VIEW: Company Observer security</h6>
            <i className="fa-solid fa-angle-down Lower-Nav-Sub-div-angle-down"></i>
            <div className='Lower-Nav-Sub-div-Third-Item'><h6>SEVERITY: ALL</h6><i className="fa-solid fa-angle-down "></i></div>
        </div>
        <div className='Lower-Nav-Sub-div-two'>
           <button className='Lower-Nav-Sub-div-two-Button-one'>Simple View</button>
           <button className='Lower-Nav-Sub-div-two-Button-two'>Enriched View</button>
        </div>
    </div>
  )
}

export default LowerNavbar