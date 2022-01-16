import Chart from "../../../components/Admin/components/chart/chart";
import FeaturedInfo from "../../../components/Admin/components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData, userTestData } from "../../../services/dummyData";
import WidgetSm from "../../../components/Admin/components/widgetSm/WidgetSm";
import WidgetLg from "../../../components/Admin/components/widgetLg/WidgetLg";
import Sidebar from "../../../components/Admin/components/sidebar/Sidebar";
import "../../../css/App.css";
import { useEffect, useState } from "react";
import { getCountAppointmentByYear, getListUser, getListDoctor, getCountAppointmentPending } from "../../../services/admin";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  let navigate = useNavigate();

  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [doctor, setDoctor] = useState();
  const [userList, setUserList] = useState();
  const [pendingAppoint, setPendingAppoint] = useState();
  const [numOfPendingAppoint, setNumOfPendingAppoint] = useState();

  useEffect(async()=>{
    // get count appointment by year
    const year = 2021;
    const req = await getCountAppointmentByYear({"year":year});
    //setData(req);
    for (const [key, value] of Object.entries(req)){
      userData[parseInt(key)-1]["Appointments"] = value;
    }
    setData(userData);

    // count number of patient
    const req1 = await getListUser();
    // console.log(req.patient_Map);
    setUser(Object.keys(req1.patient_Map).length);
    setUserList(Object.values(req1.patient_Map));
    // count number of doctor
    const req2 = await getListDoctor();
    var tmp=0;
    for (const [key, value] of Object.entries(req2)) {
        tmp += value.length;
    }
    setDoctor(tmp);

    // Count Pending appointment
    const req3 = await getCountAppointmentPending({"status":"Pending"});
    var tmp2 = 0;
    tmp2 = req3.data.length;
    setPendingAppoint(req3.data);
    setNumOfPendingAppoint(tmp2);
    // setPendingAppoint(req3);
    // console.log(pendingAppoint);
    },[]);

  // function navigateUser() {
  //   navigate('/user');
  // }

  // function navigateDoctor() {
  //   navigate('/doctor');
  // }

  return (
    <div className="container">
      {/* <Sidebar></Sidebar> */}

      <div className="home">
        <FeaturedInfo 
          user={user} 
          doctor={doctor}
          navigateUser = {navigate}
          pending = {numOfPendingAppoint}
        />
        <Chart
          data={data}
          title="Appointments"
          grid
          dataKey="Appointments"
        />
        <div className="homeWidgets">
          <WidgetSm user={userList}/>
          <WidgetLg appointment={pendingAppoint}/>
        </div>
      </div>
    </div>
  );
}
