import React from "react";
import Nav from "./comp/navbar";

export default function index() {
  return (
    <div class="containers">
      <Nav />
      <h1 class="text-center">Home Page</h1>

      <h1>Headings</h1>
            <hr />
            <br />
      <h1>I'm learninig Web and Mobile App Development.</h1>
      <br />  <h2>I'm learninig Web and Mobile App Development.</h2>
      <br />  <h3>I'm learninig Web and Mobile App Development.</h3>
      <br />  <h4>I'm learninig Web and Mobile App Development.</h4>
      <br />  <h5>I'm learninig Web and Mobile App Development.</h5>
      <br />  <h6>I'm learninig Web and Mobile App Development.</h6>
      <br />
  <div class="mt-10">
    
  <h1>Paragraph</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in fuga
        aliquid praesentium architecto maiores dicta ex officiis! Expedita,
        totam nisi. Ut alias eaque atque esse eum reprehenderit voluptatem at.
      </p>
  </div>

      <h1 class="mt-10">Lists</h1>
      <h3>Order List</h3>
      <ol>
        <li>List item 1 </li>
        <li>List item 2 </li>
        <li>List item 3 </li>
        <li>List item 4 </li>
        <li>List item 5 </li>
      </ol>
      <h3>Unorder List</h3>
      <ul>
        <li>List item 1 </li>
        <li>List item 2 </li>
        <li>List item 3 </li>
        <li>List item 4 </li>
        <li>List item 5 </li>
      </ul>
      <h1>Defination List</h1>
      <dl>
        <dt class="dt">Mango</dt>
        <dd class="dd">
          The mango fruit is roughly oval in shape, with uneven sides. The fruit
          is a drup, with an outer fleash surrouding a stone. The flesh is soft
          and bright yellow-orangein color. The skin is of the fruit is
          yellow-green to red.
        </dd>
        <dt class="dt">Apple</dt>
        <dd class="dd">
          The apple is a pome (fleshy) fruit, in which the ripened ovary and
          surrounding tissue both become fleshy and edible.... When
          harvested,apples are usually roundish, 5-10 cm (2-4 inches) in
          diameter, some shade of red, green, or yellow in colour; they vary in
          size, shape, and acidity depending on the variety.
        </dd>
        <dt class="dt">Grapes</dt>
        <dd class="dd">
          Grapes are fleshy, rounded fruits that grow in clusters made up of
          many fruits of greenish, yellowish or purple skin. The pulp is juicy
          and sweet, and it contain several seeds or pips. It is a well-known
          fruit; it is eaten raw, although it is mainly used for making wine.
        </dd>
      </dl>
      <hr />
    </div>
  );
}
