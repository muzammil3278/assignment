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
          <p class="fs-20">
          obcaecati saepe modi at odio nostrum natus quia nulla eos eaque
            reiciendis? Pariatur? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Architecto reprehenderit officiis minus,
            obcaecati saepe modi at odio nostrum natus quia nulla eos eaque
            reiciendis? Pariatur? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Architecto reprehenderit officiis minus,
            <br />
            <br />
            <span class="bold-text">Assignment 1</span>
            <br />
            <span class="bold-text">Provided Example</span>
            <br />
            <span class="bold-text">Row 1</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-50"></div>
              <div class="blue-bar w-50"></div>
            </div>
            <br />
            <span class="bold-text">Row 2</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-90"></div>
              <div class="blue-bar w-10"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 3</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-10"></div>
              <div class="green-bar w-80"></div>
              <div class="blue-bar w-10"></div>
            </div>
            <br />
            <span class="bold-text">Row 4</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-10"></div>
              <div class="blue-bar w-90"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 5</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
              <div class="blue-bar c h-20 w-20p"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 6</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-40"></div>
              <div class="blue-bar w-10"></div>
              <div class="red-bar w-50"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 7</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-10"></div>
             <div class="submain-bar w-90 h-7">
             <div class="blue-bar w-100 h-7"></div>
              <div class="green-bar w-100 h-7"></div>
             <div class="blue-bar w-100"></div>
             </div>
            </div>
            <br />
           
            <span class="bold-text">Row 8</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
            </div>
            <br />
           
           
           
            <span class="bold-text">Row 9</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
            </div>
            <br />

          </p>
 <div className="w-25">
   <span class="bold-text">Assignment 1</span>
            <br />
            <span class="bold-text">Provided Example</span>
            <br />
            <span class="bold-text">Row 1</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-50"></div>
              <div class="blue-bar w-50"></div>
            </div>
            <br />
            <span class="bold-text">Row 2</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-90"></div>
              <div class="blue-bar w-10"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 3</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-10"></div>
              <div class="green-bar w-80"></div>
              <div class="blue-bar w-10"></div>
            </div>
            <br />
            <span class="bold-text">Row 4</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-10"></div>
              <div class="blue-bar w-90"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 5</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="green-bar w-100"></div>
              <div class="blue-bar c h-20 w-20p"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 6</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-40"></div>
              <div class="blue-bar w-10"></div>
              <div class="red-bar w-50"></div>
            </div>
            <br />
           
            <span class="bold-text">Row 7</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="red-bar w-10"></div>
             <div class="submain-bar w-90 h-7">
             <div class="blue-bar w-100 h-7"></div>
              <div class="green-bar w-100 h-7"></div>
             <div class="blue-bar w-100"></div>
             </div>
            </div>
            <br />
           
            <span class="bold-text">Row 8</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
              <div class="green-bar w-16"></div>
              <div class="yellow-bar w-7"></div>
            </div>
            <br />
           
           
           
            <span class="bold-text">Row 9</span>
            <br />
            <br />
            <div class="main-bar">
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
              <div class="green-bar w-2"></div>
              <div class="yellow-bar w-18"></div>
            </div>
            <br />

            <span>
                We will describe how each row will behave dynamically and provide some hists for a possible approach For this third row thd and blant rectangles should be the same width, and the giant space should shink:</span>
            <ul>
              <li>3. For the fourth row the blue and rectangle should remain the same with and the red rectangle should shenk Fosate Approach: Have a div with a red background and adv with a bum background Hayes fired width on the blue dy Use Fer Gre </li>
              <li>4. For the fifth row, this red square should remain the same sore but always remain in the canter of the green rectangle</li>
              <li>5.  Think about how to keep a dir fixed size and how to agn something in the absolute center of the parovit element. 6. For the show the blur angle should come the same size, while that red rectangles should shine. The blur rectangle should ran in the
                conter of the row</li>
              <li>6. For the seventh row, the rad rectangle should ran the same width
                Hr. Nest dive and use background-color trenerent
                For the eighth row the range rectangles should remain the same size while the grown space between then shrinki</li>
              <li>7. For the ninth row, the green space between the orange rectangles should remain the same width while the orange rectangles narrow

              </li>
              <li>8.       The examples we provided with the first two rectangular blocks use flexboxes. You are not required to une flexboxes for the next 7 rown, but we recommend
                
           </li>
              <li>9.       as it will also be useful in part 2 of this assignment You should only have to use the html element to complete this assignment. Also, none of the divs you create inside of the provided wrapper
            </li>
            </ul>
            <span>should have and color aroo But it is valid to specify non-green background colors for any divs, including the wrapper Try to slym the boxes as closely to the solution image as possible don't worry about getting exact dimensions or righ values. We care about what structure,</span>
 </div>
        
        </section>
      </main>
      
      <footer class=" bg-g tc">
        <div>
          
        <span>@ 2022 | Muhammad Umair Ahmad</span>
        <br />
        <span class="orange">www.muhammadumair.net</span>
        </div>
      </footer>
      
    </>
  );
};

export default index;
