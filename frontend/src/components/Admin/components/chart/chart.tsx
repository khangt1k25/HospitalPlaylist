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


export default function Chart(title: any, data: any, dataKey: any, grid: any) {

    return (
      <div className="chart">
        <h3 className="chartTitle">Appoitments</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={userData}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey="Appointments" stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
