import React from 'react'
import Nav from './components/nav'
import Fot from './components/fot'
import Link from 'next/link'
export default function index() {
  return (
    <div>
        
<Nav />
<section >
            <h2>Empty Elements</h2><br />
            <p>Empty Elements are the elements that do not have an element content and<br /><br /> an end
                tag.<br /><br />
                &emsp;&emsp;The &lt; br &gt; defines a line break , and its an empty element without a closing
                tag:<br /><br /><br />
                <b>Code:</b><br /><br />
                &ensp;&ensp; &lt; p &gt; This is a &lt; br &gt; paragraph with a line break. &lt; /p &gt;
                <br /><br />
                <b>Output:</b><br /><br />
                This is a
                <br /><br />

                paragraph with a line break.
                <br /><br /><br />
                <b>A list of commonly used Empty Elements:</b><br /><br />
            <ol>
                <li>&emsp;<span>&lt; meta/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; link/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; img/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; br/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; hr/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; input/ &gt;</span></li><br/>
            </ol>

            <br />


            The best practice in <span class="html">HTML</span> empty elements is to always put a forward slash / sign
            before the greater than &gt; sign<br /><br />

            &emsp; In this way they are closed at their start tags. These tags are also called self-<br /><br/>closing tags.


            </p>
        </section>
    <Fot />
    </div>
  )
}
