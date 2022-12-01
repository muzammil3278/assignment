import React from 'react'

import Nav from './components/nav'
import Fot from './components/fot'

export default function attributes() {
  return (
    <>
    <Nav />
    <section>
            <h2>Attributes</h2><br />
            <p>The HTML attributes are used to provide more information to an 
                <span class="html">HTML</span>element.<br /><br />
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

            You can also use single quotation marks depending on the situation esp.<br />
            when the value contains double quotes .<br /><br /><br />
            For you to better understand it look at the example below.<br /><br />
            </p>
      
                    <p>
                        <br />
                        &lt;<span class="blue">p</span> <span class="light-blue">title</span>= <span class="orange">"I
                            serve as a tooltip"</span>&gt;
                        This is a paragraph &lt;/<span class="blue">p</span> &gt;<br /><br /><br />

                        &lt;<span class="blue">p</span> <span class="light-blue">title</span>= <span class="orange">"I'm
                            a tooltip"</span>&gt;
                        This is a paragraph &lt;/<span class="blue">p</span> &gt;<br /><br />

                        &lt;<span class="blue">p</span> <span class="light-blue">title</span>= <span
                            class="orange">'It</span><span class="light-blue">'s going to break</span>
                        <span class="orange">'</span>&gt;
                        This is a paragraph &lt;/<span class="blue">p</span> &gt;<br /><br />
                    </p>
        
        </section>
       
    <Fot />
    </>
  )
}
