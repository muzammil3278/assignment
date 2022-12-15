import React from "react";
import Link from "next/link";
import style from "./style.module.css";


export default function navbar() {
  return (
    <div>
      <ul class="nav">
        <li>
         <img src="/vercel.svg" alt="logo" height="40px" width="80px" />
        </li>
        <li>
          <Link href="/assignment-3/">Home</Link>
        </li>
        <li>
          <Link href="/assignment-3/about">About</Link>
        </li>
        <li>
          <Link href="/assignment-3/contact">Contact</Link>
        </li>
        <li>
          <Link href="/assignment-3/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/assignment-3/register">REGISTERED</Link>
        </li>
      </ul>
      <h1 class="text-center">HTML Assignment 3 Batch 6</h1>
    </div>
  );
}
