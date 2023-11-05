import React, { useState } from 'react'
import './RightContentStyle.css'

const RightContent = () => {
  const [toggleplay , setTogglePlay]=useState(4)

  const row1=[
    {
      id:1,
      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/800px-Microsoft_Azure.svg.png",
      title:'Azure Networking Front Doors',
      place:'Local'

    },
    {
      id:2,
      src:"https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon-8.png",
      title:'Azure Networking Front Doors',
      place:'Local'

    },
    {
      id:3,
      src:"https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
      title:'Azure Networking Front Doors',
      place:'Local'

    },
    {
      id:4,
      src:"https://seeklogo.com/images/B/byjus-logo-E37962D240-seeklogo.com.png",
      title:'Azure Networking Front Doors',
      place:'Local'

    },
    {
      id:5,
      src:"https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png",
      title:'Azure Networking Front Doors',
      place:'Local'

    },
    {
      id:6,
      src:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/155485/front-logo0.jpeg?isig=0&wm=0",
      title:'Azure Networking Front Doors',
      place:'Local'

    },
  ]
  
  return (
    <div className='Right-Content-main-div'>
      <div className='Right-Content-sub-top-div'>
        <ul>
          <li className='Right-Content-sub-top-div-list-items'>CONTROLS</li>
          <li className='Right-Content-sub-top-div-list-items'>|</li>
          <li className='Right-Content-sub-top-div-list-items'>COVERAGE</li>
          <li className='Right-Content-sub-top-div-list-items'>|</li>
          <li className='Right-Content-sub-top-div-list-items'>TOOLS</li>
          <li className='Right-Content-sub-top-div-list-items'>|</li>
          <li className='Right-Content-sub-top-div-list-items'>TRENDS</li>
        </ul>
      </div>
      <div className='Right-Content-Total-Score-div'>
        <div className='Right-Content-Total-Score-div-element'>64</div>
      </div>
      <div className='Right-Content-Tools-List-div'>
        <p>Tools List</p>
        <div className='Right-Content-Tools-List-div-radio-item'>
        <input onClick={()=>setTogglePlay(1)} type="radio" name="speed" id="slow" />
        <label htmlFor="slow">Slow</label>
        <input onClick={()=>setTogglePlay(4)} type="radio" name="speed" id="regular" />
        <label htmlFor="regular">Regular</label>
        <input onClick={()=>setTogglePlay(2)} type="radio" name="speed" id="fast" />
        <label htmlFor="fast">Fast</label>
        <input onClick={()=>setTogglePlay(3)} type="radio" name="speed" id="manual" />
        <label htmlFor="manual">Manual scroll</label>
        </div>
      </div>
      <div className='Right-Content-Auto-Scrolling'>
        <div className={toggleplay === 1 ? 'Right-Content-Auto-Scrolling-sub-div-slow' : toggleplay === 2 ? 'Right-Content-Auto-Scrolling-sub-div-fast' : toggleplay === 3 ? 'Right-Content-Auto-Scrolling-sub-div-two-stop' : 'Right-Content-Auto-Scrolling-sub-div-regular'}>
        {row1.map((items)=>(
          <div key={items.id} className='Right-Content-Auto-Scrolling-image-div'>
            <img src={items.src} alt="" />
            <div className='Right-Content-Auto-Scrolling-image-div-Content'>
            <p className='Right-Content-Auto-Scrolling-image-div-Content-First-para'>{items.title}</p>
            <p className='Right-Content-Auto-Scrolling-image-div-Content-second-para'>{items.place}</p>
            </div>
            <div className='Right-Content-Auto-Scrolling-NA-div'>
              N/A
            </div>
            <div className='Right-Content-Auto-Scrolling-lowest-Items'>
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </div>
        ))}
        </div>
        <div className={toggleplay === 1 ? 'Right-Content-Auto-Scrolling-sub-div-slow' : toggleplay === 2 ? 'Right-Content-Auto-Scrolling-sub-div-fast' : toggleplay === 3 ? 'Right-Content-Auto-Scrolling-sub-div-stop-two' : 'Right-Content-Auto-Scrolling-sub-div-regular'}>
        {row1.map((items)=>(
          <div key={items.id} className='Right-Content-Auto-Scrolling-image-div'>
            <img src={items.src} alt="" />
            <div className='Right-Content-Auto-Scrolling-image-div-Content'>
            <p className='Right-Content-Auto-Scrolling-image-div-Content-First-para'>{items.title}</p>
            <p className='Right-Content-Auto-Scrolling-image-div-Content-second-para'>{items.place}</p>
            </div>
            <div className='Right-Content-Auto-Scrolling-NA-div'>
              N/A
            </div>
            <div className='Right-Content-Auto-Scrolling-lowest-Items'>
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default RightContent