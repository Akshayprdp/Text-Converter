import React, { useState } from 'react'
import './Body.css';


function Body() {
  const[text,setText]=useState("")
  const handlechange=(event)=>{setText(event.target.value)}
  const upper=()=>{const newtext=text.toUpperCase()
  setText(newtext)}
  const lower=()=>{const ltext=text.toLowerCase()
  setText(ltext)}
  const nospc=()=>{const stext=text.replace(/ /g,'')
  setText(stext)}
  const italic=()=>{const itext=text;
  const regex=/\*([^*]+)\*/
  const iitext=itext.regex
  setText(iitext)}
  const length=()=>{const nstext=text.replace(/ /g,'')
  const lenghoftext=nstext.split("").length  
  setText(lenghoftext+"words")}
  const time=()=>{const txt=text.trim()
                  const text1=txt.split(/\s+/);
                  const text2=text1.length;
                  const text3=text2*0.24
                  setText(text3+"sec")
  }

  return (<div>
  <div>
    
</div>
    <div> 
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className='textarea'>
                  <h4 className='h4'>Enter text here</h4>
                  <textarea name="" id="" cols="50" rows="20" onChange={handlechange} value={text} ></textarea>                          
                  <div className='btn1'><button type="button" class="btn btn-primary btn-sm" onClick={upper}>UPPER CASE</button></div>
                  <div className='btn2'><button type="button" class="btn btn-primary btn-sm"onClick={lower}>lower case</button></div>                                 
                  <div className='btn3'><button type="button" class="btn btn-primary btn-sm"onClick={nospc}>nospace</button></div>
                  <div className='btn4'><button type="button" class="btn btn-primary btn-sm"onClick={italic}>italic</button></div>
                  <div className='btn5'><button type="button" class="btn btn-primary btn-sm"onClick={length}>Length?</button></div>  
                  <div className='btn6'><button type="button" class="btn btn-primary btn-sm"onClick={time}>time</button></div>             
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className='h2'><h4>summary</h4></div>                
                 <p  className='smry'>{text}</p>                            
              </div>
            </div>
          </div>
    </div>
    <div>
        <div className='footer'>
            <div>
                <a href=""  className='a'><h3 className='about'>about</h3></a>
                <a href="" className='a'><h3 className='contactus'>contact us</h3></a>
                <a href=""className='a'><h3 className='services'>services</h3></a>
             </div>
        </div>
      
    </div>
    </div>
  )
}

export default Body
