import React, {useReducer, useState, useEffect} from 'react';
import './userList.css';
import { getListUser } from '../../../services/admin';
import { constants } from 'buffer';


export default function UserList() {
  const [data, setData] = useState();

  useEffect(async()=>{
    // fetchData()
    const req = await getListUser();
    // console.log(req.patient_Map);
    setData(Object.values(req.patient_Map));
    //setData(req);
    },[]);
  console.log(data);

  return (
    
    <div className='container'>

      <table  className='customers'>
        <thead>
          <tr key="header">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {data && data.map(user => 
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );

}