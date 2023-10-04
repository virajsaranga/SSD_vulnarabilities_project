import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AddBusRoutesInputs, userInputs, employeeAllocationInputs,} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Timetable from "./pages/timetable/Timetable";
import Employee_allocate_Form from "./pages/employee_allocation/Employee_allocate_Form";
import Employee_List from "./pages/employee_list/Employee_List";
import BusRoutes_add_Form from "./pages/BusRoutes_add/BusRoutes_add_Form";
import BussRoutes_list from "./pages/BussRoutes_list/BussRoutes_list";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/Timetable">
            <Route index element={<Timetable />} />
          </Route>

          <Route path="/employee">
            <Route
              index
              element={
                <Employee_List title="Employee Allocation for the Vehicle" />
              }
            />

            <Route
              path="newAllocation"
              element={
                <Employee_allocate_Form
                  inputs={employeeAllocationInputs}
                  title="Add New Employee Allocation"
                />
              }
            />
          </Route>

          {/* /bussRoutes/newbussRoutes */}

          <Route path="/bussRoutes">
            <Route
              index
              element={
                <BussRoutes_list title="BusRoutes Allocation for the System" />
              }
            />

            <Route
              path="newbussRoutes"
              element={
                <BusRoutes_add_Form
                  inputs={AddBusRoutesInputs}
                  title="Add New Bus Routes"
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
