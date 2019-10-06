import React from 'react'
import "./Opg3.css"

function Emoji() {
    const date = new Date();
    let hour = date.getHours();
    let fjes = "😊"
    if (hour < 12) {
      fjes = "😠"
    }
    
    return (
      <div>
      <span>{fjes}</span>
      <span>{hour}</span>
      </div>
    )
  }
  
export default Emoji
