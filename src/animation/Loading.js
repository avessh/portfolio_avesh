import React, { useEffect } from 'react'
import { preLoaderAnim } from '.'

function Loading() {
    useEffect(() => {
        preLoaderAnim()
    }, [])
  return (
    <div style={{backgroundColor:"black" , color:"white"}}>
      Loading website
    </div>
  )
}

export default Loading
