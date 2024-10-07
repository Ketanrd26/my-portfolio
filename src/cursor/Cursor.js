import React, { useEffect, useRef } from 'react';
import './cursor.scss';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMoveCursor = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = x + 'px';
        cursorRef.current.style.top = y + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.borderColor = 'black'; // Change cursor border to black
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.borderColor = 'white'; // Reset cursor border to white
      }
    };

    document.addEventListener('mousemove', mouseMoveCursor);

    // Add event listeners to elements with the class 'blackCursor'
    const blackCursorElements = document.querySelectorAll('.blackCursor');
    blackCursorElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', mouseMoveCursor);
      blackCursorElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;