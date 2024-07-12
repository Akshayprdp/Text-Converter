import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
        <div className='footer'>
            <div>
                <a href=""  className='a'><h3 className='about'>about</h3></a>
                <a href="" className='a'><h3 className='contactus'>contact us</h3></a>
                <a href=""className='a'><h3 className='services'>services</h3></a>
             </div>
        </div>
      
    </div>
  )
}

export default Footer
