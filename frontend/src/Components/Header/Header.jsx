import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="Head">
        <center>
          
          {/* <Link to="" className='home'>Home</Link>  
          <Link to="" className=''>About</Link>  */}
      <h1 className='text'>{props.name}</h1>
      
      </center>
      <div className='button'>
      <button type="button"  class="btn btn-secondary btn-lg">{props.button}</button>
      </div>
    </div>
  )
}

export default Header
