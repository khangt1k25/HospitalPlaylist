import "./chart.css";
import { userData } from '../../../../services/dummyData';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { Component } from "react";
export default class Chart extends Component<any, any>  {

  constructor(props: any) {
    super(props);
    this.state = {
      data: userData
    };
  }
  render() {
    // this.setState(() => {
    //   return {data: this.props.data};
    // })
    return (
        <div className="chart">
          <h3 className="chartTitle">Appoitments</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={this.props.data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey="Appointments" stroke="#5550bd" />
              <Tooltip />
              {<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) 
  }
}
  
