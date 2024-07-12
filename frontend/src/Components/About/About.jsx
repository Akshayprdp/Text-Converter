import React, { useState } from 'react'


function About() {
  const [style1, setstyle1] = useState({ backgroundColor: "white", color: "black" });
  const [Buttonstyle, setsButtonstyle] = useState({ backgroundColor: "black", color: "white" });
  const togglecolor = () => {
    if (style1.color === "black") {setstyle1({ backgroundColor: "black", color: "white" })}
    else { setstyle1({ backgroundColor: "white", color: "black" }) }
    if (Buttonstyle.backgroundColor === "black") { setsButtonstyle({backgroundColor: "white", color: "black" }) } 
    else { setsButtonstyle({ backgroundColor: "black", color: "white" }) }}

    
  return (
    <div style={style1}>
      <div class="accordion accordion-flush" id="accordionFlushExample" style={style1} >
        <div class="accordion-item" style={style1}>
          <h2 class="accordion-header" style={style1}>
            <button style={style1} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={style1}>
            <div class="accordion-body" style={style1}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item" style={style1}>
          <h2 style={style1} class="accordion-header">
            <button style={style1} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={style1}>
            <div class="accordion-body" style={style1}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item" style={style1}>
          <h2 style={style1} class="accordion-header">
            <button style={style1} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={style1}>
            <div class="accordion-body" style={style1}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
      <button type="button" onClick={togglecolor} style={Buttonstyle}>Dark mode</button>
    </div>
  )
  }

export default About
