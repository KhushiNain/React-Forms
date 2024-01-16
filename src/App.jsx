import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [field,setField]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNo:""
  })

  const[submitted,setSumbit]=useState(false);
  const[validate, setValidate]=useState(false)



  const handleSumbit=(e)=>{
    e.preventDefault(); 
    setSumbit(true)
    if(field.firstName!="" && field.lastName!="" && field.email!="" && field.phoneNo!="" && field.phoneNo.length==10 && field.email.includes("@")==true){
      setValidate(true);
    }

  }
 

  return (
    <>
    <div>
      {validate ? <h3>Registration Successfull</h3>:null} 
    </div>
    <form action="" className='Regis-form' onSubmit={handleSumbit}>
      <input id='first-name' type="text" placeholder='First name' 
      value={field.firstName} 
      onChange={(e)=>setField({...field, firstName: e.target.value })}/>
      {submitted==true && field.firstName==""?<p>Enter Your First Name</p> :null}
      <input id='last-name' type="text" placeholder='Last name'
      value={field.lastName} 
      onChange={(e)=>setField({...field, lastName: e.target.value })} />
      {submitted==true && field.lastName==""?<p>Enter Your Last Name</p> :null}
      <input id='emmail' type="text" placeholder='Email'
      value={field.email} 
      onChange={(e)=>setField({...field, email: e.target.value })} />
      {submitted==true && field.email==""?<p>Enter Your Email</p> :null}
      {submitted==true && field.email!="" && field.email.includes("@")==false ?<p>Please Write a valid mail</p> :null}
      <input id='number' type="number" placeholder='Phone Number'
      value={field.phoneNo} 
      onChange={(e)=>setField({...field, phoneNo: e.target.value })}/>
      {submitted==true && field.phoneNo==""?<p>Enter Your Phone Number</p> :null}
      {submitted==true && field.phoneNo!="" && field.phoneNo.length !=10?<p>Please enter 10 digits number</p> :null}
      <button>Register</button>
    </form>
    </>

  )
}
 
export default App
