import React, { useState } from 'react'
import "./Dashboard.scss"
function Dashboard() {
const initialValue = 0
 const[num , setNum] = useState(initialValue)
 const handleIncrement = () =>{
         setNum(num + 1)
 }
 const handleDecrement = () =>{
  setNum(num - 1)
 }
 const handleReset = () =>{
  setNum(initialValue)
 }
  return (
    <div>
        <h1>This is Dashboard Page</h1>

       <button onClick={handleIncrement}>+</button>

        <h2>{num}</h2>

        <button onClick={handleDecrement}>-</button>
        <br/>
        <br/>

        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
export default Dashboard