import React, { useEffect, useState } from 'react'
import "./Signup.scss"
import Header from './common/Header'
import { ToastContainer, toast } from 'react-toastify';
import { MdOutlineAssignmentInd } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Signup() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   const[fname , setFname] = useState('')
   const[lname , setLname] = useState('')
   const[user, setUser]= useState('')
   const[pass, setPass]=useState('')
   const Validation=(e)=>{
    e.preventDefault()
    if(fname==''||lname==''||user==''||pass==''){
      toast.error("Fill All details")
    }
    else{
      toast.success("Submitted")
      localStorage.setItem("user", user)
      localStorage.setItem("pass",pass)
      setTimeout(() => {
        window.location.href="/loginpage"
      },5000);
      
    }
   }
   useEffect(() =>{
    toast.success("Welcome")
   },[])
  return (
    <div>
      <ToastContainer/>
      <Header/>
        <MdOutlineAssignmentInd className='sign' />
        <h1>Signup Page</h1>
        <br/>
        <br/>
        <form onSubmit={Validation}>
          <input 
          type='text'
          placeholder='Enter ur firstName'
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          />
         <br/>
         <br/>
         <input type='text'
          placeholder='Enter ur last name'
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          />
          <br/>
          <br/>
          <input type='text'
          placeholder='Enter Username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          />
          <br/>
          <br/>
          <input type='text'
          placeholder='Enter Password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          />
          <br/>
          <br/>

          <button type="submit">Signup</button>
        </form>

        <Slider {...settings}>
      <div className='slideone'>
        <h3>1</h3>
      </div>
      <div className='slidetwo'>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    </div>
  )
}
export default Signup