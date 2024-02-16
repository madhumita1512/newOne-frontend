import {useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
const Signin=()=>{
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState("")
  const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        let err = {}
        if(email.length < 3 ){
          err.email="Email is incorrect"
        }
          if(!password){
            err.password = "Password is incorrect"
          }
        if (Object.keys(err).length > 0){
            setErrors({...err})
            return
          }
      }
      const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        setErrors({...errors,email:''})
      }
      const handlePasswordChange=(e)=>{
        setPassword(parseInt(e.target.value))
        setErrors({...errors,password:''})
    
      }
   
      return (
      <>
 
     
        <form  onSubmit={handleSubmit} >
            <div className='input-container'>
            <div className="container">
                <label htmlFor="e-mail">E-mail <sup>*</sup></label>
                <input type="text" id="e-mail" value={email} onChange={handleEmailChange}/>
                {errors.email && <div className='error'>{errors.email}</div>}
                </div>
                <div className="container">
                <label htmlFor="password">Password <sup>*</sup></label>
                <input type="text" id="password" value={password} onChange={handlePasswordChange} />
                {errors.password ? <div className='error'>{errors.password}</div>: null}
                </div>
               
                    <button type="submit" >Signin </button>
            </div>
            
                
              

            
        </form>
      </>
      )
}
export default Signin 