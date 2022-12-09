import React from 'react'

export default function register() {
  return (
    <main>
        <hr/>
<center><h1>Register Page</h1></center><hr/>
<center>
<h2>Please register to continue</h2>

<p>All the fields are requiered.</p>
</center>
<hr/>


    <fieldset>
<legend>Register</legend>
<br/>
<label for="name">FullNmae:</label><br/>
<input type="text" id="text" placeholder="Full Name"/>
<br/><br/>
<label for="email">Email:</label> <br/>
<input type="email" id="email" name="email" placeholder="Email"/><br/>
<br/>
<label for="password">password:</label> <br>
<input type="password" id="password" name="password" placeholder="Password"/>
<br/><br/>


<label>Gender</label> <br/>
<label for="male">Male:</label>
<input type="radio" id="male" name="gender" value="male"/>

<label for="female">Female:</label>
<input type="radio" id="female" name="gender" value="female"/>


    </main>
  )
}
