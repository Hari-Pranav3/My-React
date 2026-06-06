import React, { useState } from 'react'
import "./Login.scss"
import { ToastContainer, toast } from 'react-toastify';
import { FiLogIn } from "react-icons/fi";
function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const[oldusername,setOldusername] = useState(localStorage.getItem("user"))
  const[oldpassword, setOldpassword] = useState(localStorage.getItem("pass")) 
  const handlesubmit = (e) =>{
    e.preventDefault()
    if(user==''|| pass == ''){
      toast.warn('please fill all details')
    }
    else if(user == oldusername && pass == oldpassword){
      toast.success("Submitted")
      setTimeout(() => {
        window.location.href="/homepage"
      },4000);
    }else{
      toast.error("Details doesnt match")
    }
  }
  return (
    <div className='wrap'>
      <ToastContainer/>
        <h1 className='hlo'>This Is Login Page</h1>
          <form onSubmit={handlesubmit}>
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

            <button type="submit">
              <FiLogIn />
            </button>
          </form>
    </div>
  )
}
export default Login