import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


import shop from '../../assets/images/myshop.png';
import logo from '../../assets/images/ITunes.png';


function Navbar({search,inputVal,getValue}) {
    return (
  <div>
          <div  className='navbar'>
            <div className='logo'><img src={logo} /> <h1>iTunes</h1></div>

            <div className='shop'><img src={shop}  /></div> 
          </div>

          <div className="inputs">
             <div className='inputValue'> <input type='text'  onChange={getValue} type="text" value={inputVal}/></div>

             <div className="btns">
            <input type='submit' value='Search' className='Search' onClick={search}/>
            <button type='submit' value='Remove' className='remove'></button>
             </div>
          </div>

  </div>


    )
}

export default Navbar;