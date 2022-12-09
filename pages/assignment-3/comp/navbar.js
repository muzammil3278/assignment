import React from "react";
import Link from "next/link";
import style from './style.module.css'

export default function navbar() {
  return (
    <div>
      <nav>
        <header>
          <table className={style.tab}>
            <th>
              <img src="./asset/saylani.jpeg" width="100px" height="30" />{" "}
            </th>
            <th><Link href="/assignment-3/"><b>Home </b></Link></th>
            <th><Link href="/assignment-3/about"><b>About </b></Link></th>
            <th><Link href="/assignment-3/contact"><b>Contact </b></Link></th>
            <th><Link href="/assignment-3/gallery"><b>Gallery </b></Link></th>
            <th><Link href="/assignment-3/login"><b>Login </b></Link></th>
            <th><Link href="/assignment-3/media"><b>Media </b></Link></th>
            <th><Link href="/assignment-3/register"><b>REGISTERED </b></Link></th>
             </table>
        </header>
      </nav>
    </div>
  );
}
