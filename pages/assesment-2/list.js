import React from 'react'

import Nav from './components/nav'
import Fot from './components/fot'
export default function list() {
  return (
    <div class="containers">
    <Nav />
    <br/>
            In <span class="html">HTML5</span> there are some semantic elements that can be used to<br/><br/>
             define different components of a web page.
             <br/><br/><br/>
             <ul class="info-list">
                <li><span class="blue"><b>&lt; article   &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  aside  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt; details   &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt; figcaption   &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt; figure   &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  footer  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  header  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  main  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  mark  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  nav  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  section  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  summary  &gt;</b></span></li><br/>
                <li><span class="blue"><b>&lt;  time  &gt;</b></span></li><br/>
             </ul>
    <Fot />
    </div>
  )
}
