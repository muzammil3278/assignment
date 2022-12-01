import React from 'react'

import Nav from './components/nav'
import Fot from './components/fot'
export default function semantic() {
  return (
    <div>
    <Nav />
    <section>
            <h2>Semantic Elements</h2><br />
            <p>When building web pages, we use a combination of non-semantic <span class="html">HTML</span><br /><br />
                and semantic <span class="html">HTML</span>. The word semantic means <b>"relating to
                    meaning"</b>,so<br /><br/>
                semantic elements provide information about the content between the opening and closng tags.
                <br /><br /><br />

                By using Semantic <span class="html">HTML</span>, we select <span class="html">HTML</span> elements
                based on their meaning,
                not on how they are presented. Elements such as <b><span class="blue">&lt; div &gt;</span></b> and<br /><br/>
                <b><span class="blue">&lt; span &gt;</span></b> are not semantic elements
                since they provide no context as to what is inside of those tags.<br /><br />
                For example, instead of using a <b><span class="blue">&lt; div &gt;</span></b> element to contain our header
                information, we could use a
                <b><span class="blue">&lt; header &gt;</span></b> element, which<br /><br/> is used as a heading section. By using a
                <b><span class="blue">&lt; header &gt;</span></b>
                tag instead of a <b><span class="blue">&lt; div &gt;</span></b>, we provide context as of what information is
                inside<br /><br/> of the
                opening and closing tag.
                <br /><br /><br />
            <h2>Why Use Semantic Elements </h2><br /><br />
            <ul class="info-list">
                <li><b>Accessibility:</b>Semantic <span class="html">HTML</span> makes webpages accessible for mobile
                    devices and for people<br /><br /><br/>
                    with disabilities as well. This is because screen readers and browsers are able to intrepret the<br/><br/><br/>
                    code better.


                </li><br />
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
