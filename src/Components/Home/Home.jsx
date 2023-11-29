import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
  const {id}=useParams()
console.log(id);
  const [getEmp,setEmp]=useState([])
  const getEmployee=async()=>{
    const res=await axios.get("http://localhost:3006/employee/getemploye")
    setEmp(res.data)
    
    
  }
  useEffect(()=>{
    getEmployee() 
  } ,[])
  console.log(getEmp[0])

  const deleteEmp = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");

    if (isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:3006/employee/deleployee/${id}`);
        console.log('Employee deleted:', res.data);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    } else {
      console.log('Deletion cancelled.');
    }
    getEmployee() 
  }; 
  return (
    <div>
      <div className="main">
        <div className="details-main-card">
          <div className="details-main-heading"><h2>Employees</h2></div>
          <div className="employee-list">
           
              <tr>
                <th className='hm-th'><u>EmpId</u></th>
                <th className='hm-th'><u>Name</u></th>
              </tr>
              {
                getEmp.map((data,index)=>
                  
                  <tr key={index}>
                  <td className='hm-td'>{data.Empid}</td>
                  <td className='hm-td-name'>{data.Name}</td>
                  <td className='hm-td'>
                  <Link className='edit' to={`/edit/${data._id}`}>Edit</Link>
                  <Link className='view' to={`/view/${data._id}`}>View</Link>
                  <Link className='delete' to={`#${data._id}`} onClick={() => deleteEmp(data._id)}>Delete</Link></td>
                </tr>
                )
              }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
