import React, { useState } from 'react'

import styles from "./ColorPicker.module.css";

export default function ColorPicker() {
    const[color,setColor] = useState('#FFFFFF');
    function handleColor(e){
        setColor(e.target.value);
    }
  return (
    <div className={styles.ColorPicker}>
     
        <h1>Color Picker</h1>
        <div className={styles.colorDisplay}  style={{backgroundColor: color}}>
          <p>Selected color :- {color}</p>
        </div>
        <label htmlFor="">Select Color:---</label>
        <input type="color" value={color} onChange={handleColor}/>
       
   </div>
  )
}