import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div class="container">
      <h4>HTML Assignment</h4>
      <div class="container ">
        <Link href="/assesment-1/"> Assesment -1</Link>
        <br />
        <hr />
      </div>
      <div class="container">
        <Link class="p" href="/assesment-2/">
          Assesment -2
        </Link>
        <br />
        <hr />
      </div>
      <div class="container">
        <Link class="p" href="/assignment-3/">
          Assesment -3
        </Link>
        <br />
        <hr />
      </div>
      <h4>HTML & CSS Assignment</h4>
      <div class="container">
        <Link class="p" href="/assignment-4/">
          Assesment -4
        </Link>
        <br />
        <hr />
      </div>

      <h4>Practises Navbar</h4>
      <div class="container">
        <Link class="p" href="/navbar/index1a">
          Navbar 1
        </Link>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default index;
