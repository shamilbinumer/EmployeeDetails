import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
  let Photo="";
  const [val,setVal]=useState({
    Empid:"",
    Name:"",
    Email:"",
    PhNumber:"",
    Address:"",
    Designation:"",
    Sallery:"",
    Expirience:""
  })


const Getdata=(e)=>{ 
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
}
//CONVERT
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
          reject(error)
      }
  })
}
const Upload=async(e)=>{
  e.preventDefault()

  Photo=await convertToBase64(e.target.files[0])
  console.log(Photo);
}

const RegisterData=async(e)=>{
  e.preventDefault()
  console.log(val)
  
  const res=await axios.post("http://localhost:3006/employee/addemploye",{...val,Photo:Photo})
  if(res.status!=201){
    alert("Data Not Added")
  }else{
    navigate("/")
  }
  // console.log(Photo);
}




  return (
    <div>
      <div className="register-main-div">
        <div className="register-details-div">
          <div className="register-heading">
            <h2>Register</h2>
          </div>
          <div className="register-table">
          <form action="">
          <table>
          <tr>
              <th className='th'>Emp Id :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Empid' placeholder='Enter the Id of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Name :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Name' placeholder='Enter the name of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Email :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Email' placeholder='Enter the Email of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Phone Number :</th>
              <td className='td'><input type="text" onChange={Getdata} name='PhNumber' placeholder='Enter the phone number of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Address :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Address' placeholder='Enter the address of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Designation :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Designation' placeholder='Enter the designation of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Salary :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Sallery' placeholder='Enter the sallery of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Experience :</th>
              <td className='td'><input type="text" onChange={Getdata} name='Expirience' placeholder='Enter the expirience of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Photo :</th>
              <td className='td'><input type="file" name='Photo' onChange={Upload}/></td>
            </tr>
          </table>
          </form>
          <div className="submit-btn">
            <button onClick={RegisterData}>Submit</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
