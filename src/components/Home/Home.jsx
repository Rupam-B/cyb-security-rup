import React, { useState } from 'react'
import './HomeStyle.css'

const Home = () => {

  const [toggleHomeContent, setToggleHomeContent]=useState(false)
  return (
    <div className='Home-main-container'>
      <div className='Home-Top'>
        <h3><i className="fa-solid fa-house Home-Top-Logo"></i>Home</h3>
        {toggleHomeContent?<i onClick={()=>setToggleHomeContent(false)} className="fa-solid fa-angle-up Home-Top-Sub-div-angle-down"></i>:
        <i onClick={()=>setToggleHomeContent(true)} className="fa-solid fa-angle-down Home-Top-Sub-div-angle-down"></i>}
      </div>
      <div className='Home-Sidebar-lists'>
        <ul>
          <li className={toggleHomeContent?'Home-Li-contents show-Home-angle-down-content':'Home-Li-contents Hide-Home-angle-down-content'}>Dashboard</li>
          <li className={toggleHomeContent?'Home-Li-contents show-Home-angle-down-content':'Home-Li-contents Hide-Home-angle-down-content'}>Coverage</li>
          <li className={toggleHomeContent?'Home-Li-contents show-Home-angle-down-content':'Home-Li-contents Hide-Home-angle-down-content'}>Current View Tools</li>
          <li className='Home-Li-contents'><i className="fa-solid fa-screwdriver-wrench Home-Li-contents-Logo"></i> ON-PREMISE</li>
          <li className='Home-Li-contents'><i className="fa-solid fa-cloud Home-Li-contents-Logo"></i> SSPM</li>
          <li className='Home-Li-contents'><i className="fa-solid fa-cloud-arrow-up Home-Li-contents-Logo"></i> CSPM</li>
          <li className='Home-Li-contents'><i className="fa-brands fa-phoenix-framework Home-Li-contents-Logo"></i> FRAMEWORKS</li>
          <li className='Home-Li-contents'><i className="fa-regular fa-calendar Home-Li-contents-Logo"></i> REPORTS</li>
          <li className='Home-Li-contents'><i className="fa-solid fa-ear-listen Home-Li-contents-Logo"></i> SYSTEM</li>
        </ul>
      </div>
    </div>
  )
}

export default Home