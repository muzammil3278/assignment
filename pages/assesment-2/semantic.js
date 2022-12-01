import React from 'react'

import Nav from './components/nav'
import Fot from './components/fot'
export default function semantic() {
  return (
    <div>
    <Nav />
    <section>
            <h2>Semantic Elements</h2><br />
            <p>When building web pages, we use a combination of non-semantic 
                <span class="html">HTML</span>
                and semantic <span class="html">HTML</span>. The word semantic means <b>"relating to
                    meaning"</b>,so<br /><br/>
                semantic elements provide information about the content between the opening and closng tags.
                <br /><br /><br />
            <h2>Why Use Semantic Elements </h2><br /><br />
            <ul class="info-list">
              
                <li><b>SEO:</b>It improves the website <b>SEO</b>, or <b>S</b>earch <b>E</b>ngine <b>O</b>ptimization,
                    which is the process of increasing the number<br/><br/><br/> of people that visit your webpage. With
                    better <b>SEO</b>,
                    search engines are better
                    able to identify the content of your<br /> <br /><br/> website and weight the most important content
                    <br /><br /><br/>appropriately.<br/><br/>
                </li><br />
                <li><b>Easy to Understand:</b> Semantic <span class="html">HTML</span> also makes the website's source
                    code easier to
                    read for other web developers.
                </li><br />
            </ul>

           

            </p>
        </section>
    <Fot />
    </div>
  )
}
