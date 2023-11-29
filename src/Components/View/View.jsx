import React, { useEffect, useState } from 'react'
import './View.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const View = () => {

const {id}=useParams()
console.log(id);
const [getEmp,setEmp]=useState([])
const fullView = async (id) => {
  try {
    
    const res = await axios.post(`http://localhost:3006/employee/getDetails/${id}`);
    // console.log(res);
    setEmp(res.data);
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
};
useEffect(() => {
  fullView(id);
}, [id]);   
console.log(getEmp);

  return (
    <div>
      <div className="view-main"> 
        <div className="view-details-div">
          <div className="image-name-email-section">
            <div className="view-img">
              <img src={getEmp.Photo} alt="" />
            </div>
            <div className="view-name-email">
              <h1>{getEmp.Name}</h1>
              <h4>{getEmp.Email}</h4>
            </div>
          </div>
          <div className="view-other-details">
            <table>
              <tr>
                <th>Emp Id</th>
                <td>: {getEmp.Empid}</td>
              </tr>
              <tr>
                <th>Phone Number </th>
                <td>: +91 {getEmp.PhNumber}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>: {getEmp.Address}</td>
              </tr>
              <tr>
                <th>Designation</th>
                <td>: {getEmp.Designation}</td>
              </tr>
              <tr>
                <th>Salary</th>
                <td>: {getEmp.Sallery}</td>
              </tr>
              <tr>
                <th>Experience</th>
                <td>: {getEmp.Expirience}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
