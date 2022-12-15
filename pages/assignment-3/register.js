import React from "react";
import Nav from "./comp/navbar";

export default function register() {
  return (
    <main class="containers">
      <Nav />

      <center>
        <h1>Register Page</h1>
      </center>
      <hr />

      <h2>Please register to continue</h2>

      <p>All the fields are requiered.</p>

      <fieldset>
        <legend>Register</legend>
        <br />
        <label for="name">FullNmae:</label>
        <br />
        <input type="text" id="text" placeholder="Full Name" />
        <br />
        <br />
        <label for="email">Email:</label> <br />
        <input type="email" id="email" name="email" placeholder="Email" />
        <br />
        <br />
        <label for="password">password:</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <br />
        <label>Gender</label> <br />
        <label for="male">Male:</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="female">Female:</label>
        <input type="radio" id="female" name="gender" value="female" />
      </fieldset>
    </main>
  );
}
