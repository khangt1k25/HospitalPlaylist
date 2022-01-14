import Chart from "../../../components/Admin/components/chart/chart";
import FeaturedInfo from "../../../components/Admin/components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../services/dummyData";
import WidgetSm from "../../../components/Admin/components/widgetSm/WidgetSm";
import WidgetLg from "../../../components/Admin/components/widgetLg/WidgetLg";
import Sidebar from "../../../components/Admin/components/sidebar/Sidebar";
import "../../../css/App.css";

export default function DashBoard() {
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
