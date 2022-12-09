import React from 'react'
import Link from 'next/link'

// import { Homes } from "../json/main";


const index = () => {
  return (
    <>
      {/* {Homes.map((Home, key) => {
        return (
          <div key={key}>
            <Link href={Home.link} key={Home.id}>
              <a className="pt-40 pb-40 pl-40 mt-40">{Home.title}</a>
            </Link>
          </div>
        );
      })} */}
      <Link href="/assesment-1/">Assesment -1</Link><br/><hr/>
      <Link href="/assesment-2/">Assesment -2</Link><br/><hr/>
      <Link href="/assignment-3/">Assesment -3</Link><br/><hr/>
    </>

  )
}

export default index