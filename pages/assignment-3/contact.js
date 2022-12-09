import React from 'react'

import Nav from './comp/navbar'
export default function contact() {
  return (
    <div> <Nav />
          <main>
        <hr/>
<center><h1>Contact page</h1></center>
<hr/>
<center><h2>How Can We Help?</h2>
<p>We will be happy to help you. Fill out the form and we will get back to you shortly.</p></center>
<hr/>
<center>
   <br/>
    <label for="name">Name*: </label>
    <input type="text" id="name" name="name" placeholder="Full Name*"/><br/>
    <br/>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Email"/><br/>
<br/>
    <label for="subject">Subject*:</label>
    <input type="text" id="subject" name="subject" placeholder="Subject*"/><br/>
<br/>
    
    <textarea rows="12" cols="60" placeholder="Your Question / Query / Message *"></textarea>

 <br/><br/>
    
    <button value="Send Message">Send Message</button>
</center>
</main>

    </div>
  )
}
