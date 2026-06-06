import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subtractNumber } from './Redux/action'
import "./ProductList.scss"
import { MdNightlight } from "react-icons/md";
function ProductList() {
        const dispatch = useDispatch();
        const addResult = useSelector((state) => state.add.result);
        const subtractResult = useSelector((state) => state.subtract.result);
        const multiplyResult = useSelector((state) => state.multiply.result);
        const divideResult = useSelector((state) => state.divide.result);
        const[mode, setMode] = useState(false)
        const handleMode = () =>{
            setMode(!mode)
        }
  return (
    <div style={{textAlign: "center", marginTop: "50px"}} className={mode ?"dark": "light"}>
        <button onClick={handleMode}> <MdNightlight /></button>
        <br/>
        <br/>
        <h2>Redux Counter</h2>
        <h3> Add Result: {addResult}</h3>
        <button onClick={() => dispatch(addNumber(5))}>Add 5</button>
        <h3> Subtract Result: {subtractResult}</h3>
        <button onClick={() => dispatch(subtractNumber(3))}>Subtract 3</button>
        <h3> Multiply Result: {}</h3>
    </div>
  )
}
export default ProductList