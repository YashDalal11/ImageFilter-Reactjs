import React from 'react'
import "../App.css"
const Slider = ({min,max,value,name,handleChange}) => {
  return (
    <div className="slider-container">
      <div><b>Change the {name}:- {value}</b></div>
        <input 
            type="range" 
            className="slider"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
        />
    </div>
  )
}

export default Slider