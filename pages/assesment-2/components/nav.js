import React from 'react'

import Link from 'next/link'
export default function nav() {
  return (
    <div>
          <ul>
    <li>    <Link href="/assesment-2/">Home</Link></li>
    <li>    
      <Link href="/assesment-2/attributes">Attributes</Link></li>
      <li>
      <Link href="/assesment-2/gallery">Gallery</Link></li>
      <li>
      <Link href="/assesment-2/list">List</Link></li>
      <li>
      <Link href="/assesment-2/semantic">Semantic</Link></li>
  </ul>
    </div>
  )
}
