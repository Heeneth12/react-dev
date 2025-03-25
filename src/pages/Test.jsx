import React from 'react'

function Test({output}) {
  return (
    <div>
      <input type="text" onChange={(e)=>output(e)} placeholder="Enter your name" />
    </div>
  )
}

export default Test
