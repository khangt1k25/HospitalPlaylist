// import "./productList.css";
// import { DataGrid } from "../../../../node_modules/@material-ui/data-grid";
// import { DeleteOutline, Height } from "../../../../node_modules/@material-ui/icons";
// import { productRows } from "../../../services/dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Sidebar from "../../../components/Admin/components/sidebar/Sidebar";

// export default function Doctor() {
//   const [data, setData] = useState(productRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "product",
//       headerName: "Product",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListImg" src={params.row.img} alt="" />
//             {params.row.name}
//           </div>
//         );
//       },
//     },
//     { field: "stock", headerName: "Stock", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/product/" + params.row.id}>
//               <button className="productListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="productListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="container">
//       <Sidebar></Sidebar>
//       <div className="productList">
//         <DataGrid
//           rows={data}
//           disableSelectionOnClick
//           columns={columns}
//           pageSize={8}
//           checkboxSelection
//         />
//       </div>
//     </div>
//   );
// }

import React, {useReducer, useState} from 'react';
import './productList.css';

export default function UserList() {
  const [data, setData] = useState([
    { id: 1, username: 'Frank', email: 'frank.murphy@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 2, username: 'Vic',  email: 'vic.reynolds@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 3, username: 'Gina', email: 'gina.jabowski@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 4, username: 'Jessi', email: 'jessi.glaser@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 1, username: 'Frank', email: 'frank.murphy@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 2, username: 'Vic',  email: 'vic.reynolds@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 3, username: 'Gina', email: 'gina.jabowski@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 4, username: 'Jessi', email: 'jessi.glaser@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 1, username: 'Frank', email: 'frank.murphy@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 2, username: 'Vic',  email: 'vic.reynolds@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 3, username: 'Gina', email: 'gina.jabowski@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 4, username: 'Jessi', email: 'jessi.glaser@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 1, username: 'Frank', email: 'frank.murphy@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 2, username: 'Vic',  email: 'vic.reynolds@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 3, username: 'Gina', email: 'gina.jabowski@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 4, username: 'Jessi', email: 'jessi.glaser@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 1, username: 'Frank', email: 'frank.murphy@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 2, username: 'Vic',  email: 'vic.reynolds@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 3, username: 'Gina', email: 'gina.jabowski@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 4, username: 'Jessi', email: 'jessi.glaser@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 1, username: 'Frank', email: 'frank.murphy@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 2, username: 'Vic',  email: 'vic.reynolds@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 3, username: 'Gina', email: 'gina.jabowski@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 4, username: 'Jessi', email: 'jessi.glaser@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' },
    { id: 5, username: 'Jay', email: 'jay.bilzerian@test.com', age: 12, department: 'Dentist', desctiption: 'Doctor' }
]);

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