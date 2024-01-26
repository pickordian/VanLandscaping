import React from 'react'
import { useState } from 'react'
function BurgerMenu({state, setState} : {state: boolean, setState: any }) {
  return (
    <div className={`burger-menu ${state ? 'opened' : ''}`} onClick={()=> setState(!state)}>
    <span> </span>
    <span> </span>
    <span> </span>
    </div>
  )
}

export default BurgerMenu