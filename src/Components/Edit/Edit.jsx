import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Edit.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Edit = () => {
  let Photo=""
  let navigate=useNavigate()
  const {id}=useParams()
  const [val,setVal]=useState({
    Empid:"",
    Name:"",
    Email:"",
    PhNumber:"",
    Address:"",
    Designation:"",
    Sallery:"",
    Expirience:"",
    Photo:""
  })





const getDatas=async()=>{
  
  // console.log(val)
  const res=await axios.post(`http://localhost:3006/employee/getDetails/${id}`)
 console.log(res.data);
 if(res.status==200){
  setVal(res.data)
 }
}
useEffect(()=>{
  getDatas()
},[])

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

const Getdata=(e)=>{ 
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
}

const Upload=async(e)=>{
  e.preventDefault()
  console.log(e.target.name);

  Photo=await convertToBase64(e.target.files[0])
  console.log(Photo); 
  setVal((pre)=>({...pre,[e.target.name]:Photo}))
  console.log("upload",val);
}

const editData=async(e)=>{
  e.preventDefault()
  console.log(val)
  
  const res=await axios.patch(`http://localhost:3006/employee/editemployee/${id}`,{...val})
  if(res.status!=200){
    console.log(res.status);
    alert("Data Not Edited")
  }else{
    navigate("/")
  }
}
console.log(val);
  return (
    <div>
       <div className="register-main-div">
        <div className="register-details-div">
          <div className="register-heading">
            <h2>Edit Details</h2>
          </div>
          <div className="register-table">
          <form action="">
          <table>
          <tr>
              <th className='th'>Emp Id :</th>
              <td className='td'><input type="text" value={val.Empid} onChange={Getdata} name='Empid' placeholder='Enter the Id of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Name :</th>
              <td className='td'><input type="text" value={val.Name} onChange={Getdata} name='Name' placeholder='Enter the name of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Email :</th>
              <td className='td'><input type="text" value={val.Email} onChange={Getdata} name='Email' placeholder='Enter the Email of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Phone Number :</th>
              <td className='td'><input type="text" value={val.PhNumber} onChange={Getdata} name='PhNumber' placeholder='Enter the phone number of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Address :</th>
              <td className='td'><input type="text" value={val.Address} onChange={Getdata} name='Address' placeholder='Enter the address of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Designation :</th>
              <td className='td'><input type="text" value={val.Designation} onChange={Getdata} name='Designation' placeholder='Enter the designation of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Sallery :</th>
              <td className='td'><input type="text" value={val.Sallery} onChange={Getdata} name='Sallery' placeholder='Enter the sallery of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Expirience :</th>
              <td className='td'><input type="text" value={val.Expirience} onChange={Getdata}name='Expirience' placeholder='Enter the expirience of the employee' /></td>
            </tr>
            <tr>
              <th className='th'>Photo :</th>
              <td className='td'><input type="file" name='Photo' onChange={Upload} /></td>
             
            </tr>
            <tr>
              <td></td>
              <td><div className='image'><img src={val.Photo} alt="" /></div></td>
            </tr>
          </table>
          </form>
          <div className="submit-btn">
            <button onClick={editData}>Submit</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
