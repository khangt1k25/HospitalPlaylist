import Chart from "../../../components/Admin/components/chart/chart";
import FeaturedInfo from "../../../components/Admin/components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../services/dummyData";
import WidgetSm from "../../../components/Admin/components/widgetSm/WidgetSm";
import WidgetLg from "../../../components/Admin/components/widgetLg/WidgetLg";
import Sidebar from "../../../components/Admin/components/sidebar/Sidebar";
import "../../../css/App.css";
import { useEffect, useState } from "react";
import { getCountAppointmentByYear } from "../../../services/admin";

export default function DashBoard() {

  const [data, setData] = useState(Object);


  useEffect(async()=>{
    // fetchData()
    const year = 2021;
    const req = await getCountAppointmentByYear({"year":year});
    setData(req);
    },[]);

  //console.log(data);
  const month = {"1":"Jan","2": "Feb","3": "Mar","4": "Apr","5": "May","6": "Jun","7": "Jul","8": "Aug","9": "Sep","10": "Oct","11": "Nov","12": "Dec"};
  const dataChart = [];
  for (const [key, value] of Object.entries(data)){
    userData[parseInt(key)-1]["Appointments"] = value*1000;
  }
  return (
    <div className="container">
      {/* <Sidebar></Sidebar> */}

      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="Appointments"
          grid
          dataKey="Appointments"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
