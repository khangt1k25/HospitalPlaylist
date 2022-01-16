import React, {useReducer, useState, useEffect} from 'react';
import './productList.css';
import { getListDoctor, deleteDoctorById } from '../../../services/admin';
import { useHistory, useNavigate } from 'react-router-dom';

export default function UserList() {
  let [data, setData] = useState();
  let navigate = useNavigate();
  // let onDeleteDoctor = (id) => {
  //   const data = JSON.stringify({"id": id});
  //   console.log(data); 
  useEffect(async()=>{
    const req2 = await getListDoctor();

    var data_doctor = [];
    // console.log(req2);
    for (const [key, value] of Object.entries(req2)) {
        data_doctor = data_doctor.concat(value);
    }
    setData(data_doctor);

    // delete Doctor
   // const req3 = await deleteDoctorById();


  },[]);
  // function deleteDoctor(id) {
  //   const data = JSON.stringify({"id": id});
  //   console.log(data); 
  //   };
  const deleteDoctor = async(id) => {
    const data = JSON.stringify({"id": id});
    const req3 = await deleteDoctorById(data);
    console.log(req3);
  }
  //console.log(data);

  return (
    <div className='doctorDiv'>
            <h1 id='heading1'>DOCTOR LIST</h1>
        <div>
          <form action="">
            <label htmlFor="">
              Department:
              <input type="text" name='department' />
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      {/* <button onClick={() => {navigate.goBack}}>Back</button> */}

      <div>
        <table  className='customers'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Department</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data && data.map(user => 
              <tr>
                <td>{user.doctorId}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.department}</td>
                <td>{user.description} </td>
                <td>
                  <button className='doctorListEdit'>Edit</button>
                  <button className='doctorListDelete' onClick={() => {
                      // console.log('clicked');

                      const index = data.indexOf(user);
                      //console.log(data);
                      //data.splice(index, 1);
                      //delete data[index];
                      var tmp = [...data];
                      tmp.splice(index, 1);
                     
                      setData(tmp);
                      console.log(data);
                      //console.log(user.doctorId);
                      deleteDoctor(user.doctorId);   
                      //window.location.reload();            
                  }} >Delete</button>
                  </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );

}