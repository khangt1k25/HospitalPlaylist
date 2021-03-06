import "./featuredInfo.css";
import { getListDoctor, getListUser } from "../../../../services/admin.js";
import { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getListPatient } from "../../../../services/getAppointment";
//import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
// import { useHistory } from "react-router-dom";

export default class FeaturedInfo extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   navigate: this.props.navigate
    // }
  }


  render() {

   // let navigate = useNavigate();
    return (
      <div className="featured">
        <div className="featuredItem" onClick={()=>{this.props.navigateUser('/admin/user')}}>
          <span className="featuredTitle">PATIENTS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{this.props.user}</span>
            {/* <span className="featuredMoneyRate">
              -11.4% 
            </span> */}
          </div>
          <span className="featuredSub">Number of patients</span>
        </div>
  
        <div className="featuredItem" onClick={()=>{this.props.navigateUser('/admin/doctor')}}>
          <span className="featuredTitle">DOCTORS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{this.props.doctor}</span>
            {/* <span className="featuredMoneyRate">
              -1.4% 
            </span> */}
          </div>
          <span className="featuredSub">Number of doctors</span>
        </div>
  
        <div className="featuredItem">
          <span className="featuredTitle">PENDING APPOINTMENT</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{this.props.pending}</span>
            {/* <span className="featuredMoneyRate">
              +2.4 
            </span> */}
          </div>
          <span className="featuredSub">Number of pending appointments</span>
        </div>
      </div>
    );
  };
  
}
