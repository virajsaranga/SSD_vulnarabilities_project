import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import BadgeIcon from '@mui/icons-material/Badge';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Ceylon Travel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/employee" style={{ textDecoration: "none" }}>
            <li>
              <BadgeIcon className="icon" />
              <span>Employee</span>
            </li>
          </Link>

          <Link to="/bussRoutes" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsBusFilledIcon className="icon" />
              <span>Busses</span>
            </li>
          </Link>

          <Link to="/Timetable" style={{ textDecoration: "none" }}>
            <li>
              <DepartureBoardOutlinedIcon className="icon" />
              <span>Timtable</span>
            </li>
          </Link>
          <li>
            <MonetizationOnOutlinedIcon className="icon" />
            <span>Pramotion</span>
          </li>

          <li>
            <InsertChartIcon className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <FeedbackIcon className="icon" />
            <span>Feedback</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          {/* /////////////////////////////////////////// */}

          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
