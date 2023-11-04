import React from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar-main-div'>
        <div className='Navbar-logo-div'>
            <img src="https://media.licdn.com/dms/image/C4D33AQG0VIKN4xrR2g/thumbnail-720-1280/0/1635206201996?e=2147483647&v=beta&t=i7eAdoCC3RK1oJ3_vQNRY8OO3DZixCPw6IfNkUkuLvE" alt="" />
        </div>
        <div className='Navbar-centre-div'>
            <h3>Cyber Defence Status <span>05/11/2023</span> </h3>
        </div>
        <div className='Navbar-Right-div'>
            <ul>
            <Link><li><i className="fa-regular fa-circle score-calc-circle"></i><h4>Start Score Calculation</h4></li></Link>
                <Link><li><i className="fa-solid fa-triangle-exclamation errors-exclam"></i><h4>Cyber Observer Errors</h4></li></Link>
                <Link><li>paul.g <i className="fa-solid fa-less-than arrow-less-than"></i></li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar