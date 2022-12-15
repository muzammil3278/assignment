import React from "react";
// import { useState } from "react";

export default function index1a() {
  // const [sidebar, setMobilesidebar] = useState(false);

  return (
    // <div className="containers navbar">
    //   <nav class="nav">
    //     <div class="logo">
    //       <h4>LOOGO HERE</h4>
    //     </div>
    //     <div class="navbars">
    //       <ul
    //         class={sidebar ? "mobile" : "navs-links"}
    //         onClick={() => setMobilesidebar(false)}
    //       >
    //         <li>
    //           <a>Home</a>
    //         </li>
    //         <li>
    //           <a>About</a>
    //         </li>
    //         <li>
    //           <a>Contact</a>
    //         </li>
    //         <li>
    //           <a>Result</a>
    //         </li>
    //         <li>
    //           <a>Registered</a>
    //         </li>
    //         <li>
    //           <a>Service</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div class="toggle" onClick={() => setMobilesidebar(!sidebar)}>
    //       {sidebar ? "open" : "close"}
    //     </div>
    //   </nav>

    // </div>

    <header>
      <div class="header-area">
        <div className="container">
          <div class="header-left">
            <div className="logo"></div>
            <div className="menu"></div>
          </div>
          <div class="header-right">
            <div class="social-link">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div class="carts">Carts</div>
            <div class="search">Search</div>
          </div>
        </div>
      </div>
    </header>
  );
}
