import React from 'react'
import { myStore } from '.'
const Count = () => {
  return (
 
    <>
    Count:{myStore.count}
    <button onClick={() => {myStore.incWithParas(10)}} >Click and Increment Number</button>
    </>
    
  )
}

export default Count