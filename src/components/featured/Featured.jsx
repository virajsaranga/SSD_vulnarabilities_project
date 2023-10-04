import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import {db} from "../../firebase"
import { useEffect, useState } from "react";
import {collection,query,where,getDocs, } from "firebase/firestore"

const Featured = () => {
  const [amount,setAmount]=useState(null)
  const [prevamount,setprevAmount]=useState(null)
  const [diff,setDiff]=useState(null)
  let data;

  useEffect(()=>{

    const fetchData= async()=>{
    const today =new Date();
    const lastMonth =new Date(new Date().setMonth(today.getMonth()-1))
    const prevMonth =new Date(new Date().setMonth(today.getMonth()-2));

    const lastMonthQuery=query(
      collection(db,"Travals"),
      where("timeStamp","<=",today),
      where("timeStamp",">",lastMonth),

    )
    const prevMonthQuery=query(
      collection(db,"Travals"),
      where("timeStamp","<=",lastMonth),
      where("timeStamp",">",prevMonth),

    );
    const lastMonthData=await getDocs(lastMonthQuery)
    const prevMonthData=await getDocs(prevMonthQuery)

    setAmount(lastMonthData.docs.length)
    setprevAmount(prevMonthData.docs.length)
    setDiff((lastMonthData.docs.length-prevMonthData.docs.length)/(prevMonthData.docs.length)*100)
    }
   fetchData();
  },[]);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Travels</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={diff}  strokeWidth={5} />



        </div>
        <p className="title">Total Travels Allocated in This Month</p>
        <p className="amount">{diff}</p>
       
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Incresedment of travels</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">{diff}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Previous Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{prevamount}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{amount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
