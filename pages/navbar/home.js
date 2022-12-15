import React from "react"
import useSticky from "./useSticky"
import Navbar from "./index1a"

function home() {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky} />
    </>
  )
}

export default home