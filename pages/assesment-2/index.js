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
            <p>Empty Elements are the elements that do not have an element content and an end tag.<br /><br />
            <ol>
                <li>&emsp;<span>&lt; meta/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; link/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; img/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; br/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; hr/ &gt;</span></li><br/>
                <li>&emsp;<span>&lt; input/ &gt;</span></li><br/>
            </ol>

            <br />

            </p>
        </section>
    <Fot />
    </div>
  )
}
