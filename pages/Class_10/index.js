import React from 'react'
import Link from 'next/link'


import { class10Book } from "../../json/main";
const index = () => {
  return (
    <>
      {class10Book.map((Home, key) => {
        return (
          <div key={key}>
            <Link href={Home.link} key={Home.id}>
              <a className="pt-40 pb-40 pl-40 mt-40">{Home.book}</a>
            </Link>
          </div>
        );
      })}
    </>
  )
}

export default index