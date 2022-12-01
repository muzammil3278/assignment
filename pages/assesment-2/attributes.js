import React from 'react'

import Nav from './components/nav'
import Fot from './components/fot'

export default function attributes() {
  return (
    <>
    <Nav />
    <section>
            <h2>Attributes</h2><br />
            <p>The HTML attributes are used to provide more information to an HTML element
            <ul class="info-list">
                <li class="list-items"><span class="html">HTML</span> tags only appear at start tags . It will never be on end tags . </li><br />
                <li class="list-items">All <span class="html">HTML</span> elements can have attributes</li><br />
                <li class="list-items"><span class="html">HTML</span> elements ccna have multiple attributes.</li><br />
                <li class="list-items"><span class="html">HTML</span> attributes usually come in name/value pairs like:<span class="highlight">name ="value"</span></li><br />
                <ul class="sub-info">
                    <li class="list-items2">an attribute <span class="highlight">name</span></li><br />
                    <li class="list-items2">an equal <span class="higlight">=</span> sign</li><br />
                    <li class="list-items2">A value surrounded by quotation marks <span class="highlight">"value"</span>
                    </li><br />
                </ul>
            </ul>
            </p>
      
               
        
        </section>
       
    <Fot />
    </>
  )
}
