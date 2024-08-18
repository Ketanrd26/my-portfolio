import React, { useEffect, useRef, useState } from 'react'
import "./cursor.scss"
const Cursor = () => {
   const cursorRef = useRef()

    useEffect(()=>{
     const mouseMoveCursor = (e)=>{
        let x = e.clientX; 
        let y = e.clientY;
        
     if(cursorRef.current){
        cursorRef.current.style.left = x + "px"
        cursorRef.current.style.top = y + "px"
     }
     }

     document.addEventListener("mousemove",mouseMoveCursor );

     return ()=>{
        document.removeEventListener("mousemove",mouseMoveCursor );
     }
    },[])

  return (
    <>
      <div className="cursor" ref={cursorRef}   >
        
      </div>
      
    </>
  )
}

export default Cursor
