import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// import { useHistory } from "react-router-dom";

export default function FeaturedInfo() {
  // const history = useHistory();
  // const routeChange = (path) =>{ 
  //   // let path = `newPath`; 
  //   history.push(path);
  // }
  return (
    <div className="featured">
      <div className="featuredItem" >
        <span className="featuredTitle">PATIENTS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">3000</span>
          <span className="featuredMoneyRate">
            -11.4% <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">DOCTORS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">500</span>
          <span className="featuredMoneyRate">
            -1.4% <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">PENDING APPOINTMENT</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">xxx</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
