import React, { useEffect, useState } from 'react'

function Calculator() {
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/hacktivist123')
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json();
        })
        .then(answer=>{
            console.log(answer, "datassss")
            setData(answer)
        })
        .catch(error=>{
            console.error('There has been problem with your fetch operations:', error)
        })
    },[]

)
  return (
    <div>
        <h1> {data.bio}</h1>
        <h1> {data.location} </h1>
    </div>
  )
}

export default Calculator