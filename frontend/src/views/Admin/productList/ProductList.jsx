import React, {useReducer, useState, useEffect} from 'react';
import './productList.css';
import { getListDoctor } from '../../../services/admin';

export default function UserList() {
  const [data, setData] = useState();
  useEffect(async()=>{
    // fetchData()
    // console.log(req.patient_Map);
    const req2 = await getListDoctor();

    var data_doctor = [];
    console.log(req2);
    // for (const [key, value] of Object.entries(req2)) {
    //     data_doctor.concat(value);
    // }
    // setData(data_doctor);
    },[]);
  
  console.log(data);
  return (
    <div className='container'>
      <div>
        <form action="">
          <label htmlFor="">
            Department:
            <input type="text" name='department' />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>


      <h1 id='heading1'>DOCTOR LIST</h1>
      <table  className='customers'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Department</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {data && data.map(user => 
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.department}</td>
              <td>{user.desctiption} </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );

}