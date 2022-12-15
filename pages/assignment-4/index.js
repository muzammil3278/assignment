import React from "react";

const index = () => {
  return (
    <>
      <header class="header">
        <nav class="nav">
          <ul class="nav-list">
            <li class="list-items">
              <a href="#">Home</a>
            </li>
            <li class="list-items">
              <a href="#">Lecture</a>
            </li>
            <li class="list-items">
              <a href="#">Assignment</a>
            </li>
            <li class="list-items">
              <a href="#">Final Project</a>
            </li>
            <li class="list-items">
              <a href="#">Labs</a>
            </li>
            <li class="list-items">
              <a href="#">Docs</a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main">
        <div class="heading-text">
          <h2>Assignment 2: Static Web: HTML/CSS</h2>
          <p class="date-text">Due Sunday, January 9 :11: 59 PM PST</p>
        </div>
        <section class="section-1 section-width">
          <h3>Setup</h3>
          <p>
            Accept the github classroom <span class="orange">assignment</span>{" "}
            and clone this repo that contains stencil code for assignment 2.
          </p>
          <br />
          <br />
          <h3>Introduction</h3>
          <p>
            This is a multi-part assignment with the objective of making you
            comfortable working with HTML and CSS. By the end of this
            assignment, you will have styled some rectangular blocks and created
            a simple version of Twitter's home page.
            <br />
            <br />
            if this assignment seems overwhelming to you, please come see a TA
            at TA hours to talk through strategies for tackling it. We expect
            this assignment to be a time-consuming assignment as we cover a lot
            of fundamental techniques. But with a good strategy, it can be
            finished in a reasonable amount of time.
            <br />
            Note: only CSS and HTML will be used for this assignment. If you
            want to use Javascript(or libraries such as jQuery) then feel free
            to, but we will only be grading correctness on your CSS and HTML.
            <br />
            <br />
            If you can,
            <br />
            <br />
            <h2>Part One</h2>
            <br />
            <h4>Specifications</h4>
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            corrupti dignissimos veritatis, ea maxime pariatur iure sapiente
            obcaecati saepe modi at odio nostrum natus quia nulla eos eaque
            reiciendis? Pariatur? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Architecto reprehenderit officiis minus,
            <br />
            <br />
            Refer to this great webpage on how to use flexboxes :{" "}
            <span class="orange">CSS Flexbox Guide . </span>
            <br />
            Also feel free to use onlibe resources such as Stack Overflow, MDN,
            W3 and google for reference.
            <br />
            When you open the provided HTML file{" "}
            <span class="red">part1/index.html,</span> it should look like this:
            <br />
            <br />
            <span class="bold-text">
              Assignment 1 <br />
              <br />
              Provided Examples
            </span>
            <br />
            <br />
            <span class="bold-text">Row 1</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-50"></div>
              <div class="blue-bar w-50"></div>
            </div>
            <br />
            <br />
            <span class="bold-text">Row 2</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-90"></div>
              <div class="blue-bar w-10"></div>
            </div>
            <br />
            <br />
            <span class="bold-text">Student Todos</span>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <span class="bold-text">Row 3</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 4</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 5</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 6</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 7</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 8</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 9</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <span class="bold-text">Row 10</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
          </p>
        </section>
      </main>
    </>
  );
};

export default index;
