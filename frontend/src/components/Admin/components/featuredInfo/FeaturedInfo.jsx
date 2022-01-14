import "./featuredInfo.css";
import { getListDoctor, getListUser } from "../../../../services/admin.js";
import { useEffect, useState } from "react";
// import { getListPatient } from "../../../../services/getAppointment";
//import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// import { useHistory } from "react-router-dom";

export default function FeaturedInfo() {

  //var req = getListUser();
  // console.log(req);
  // var count_patient = 0;
  // count_patient = req.then(function(result) {
  //   // here you can use the result of promiseB
  //   // console.log(result.patient_Map);
    
  //   return Object.keys(result.patient_Map).length; 
  // });

  // console.log(count_patient);
  var count_patient = 0;
  const [user, setUser] = useState();
  const [doctor, setDoctor] = useState();


  useEffect(async()=>{
    // fetchData()
    const req1 = await getListUser();
    // console.log(req.patient_Map);
    setUser(Object.keys(req1.patient_Map).length);
    const req2 = await getListDoctor();
    var tmp=0;
    for (const [key, value] of Object.entries(req2)) {
        tmp += value.length;
    }
    setDoctor(tmp);
    },[]);
  // console.log(user);
  // console.log(doctor);

  return (
    <div className="featured">
      <div className="featuredItem" >
        <span className="featuredTitle">PATIENTS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{user}</span>
          {/* <span className="featuredMoneyRate">
            -11.4% 
          </span> */}
        </div>
        <span className="featuredSub">Number of patients</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">DOCTORS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{doctor}</span>
          {/* <span className="featuredMoneyRate">
            -1.4% 
          </span> */}
        </div>
        <span className="featuredSub">Number of doctors</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">PENDING APPOINTMENT</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">xxx</span>
          {/* <span className="featuredMoneyRate">
            +2.4 
          </span> */}
        </div>
        <span className="featuredSub">Number of pending appointments</span>
      </div>
    </div>
  );
}
