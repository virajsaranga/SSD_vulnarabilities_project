import "./chart.scss";
import { collection, getDocs } from "firebase/firestore"
import {db2} from "../../firebase"
import { doc, deleteDoc ,onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const Chart = ({ aspect, title }) => {


  const [data, setData] = useState([]);

  useEffect(()=>{
 
    const unsub =onSnapshot(collection(db2,"passengerTrips"),(snapshot)=>{
      let list=[];
      snapshot.docs.forEach(doc=>{
        list.push({id:doc.id,...doc.data()})
      })
      setData(list)
    },(error)=>{
      console.log(error)
    })
    return()=>{
      unsub();
    }
    },[])
   console.log(data)
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="passengerNic" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="tripDistance"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;