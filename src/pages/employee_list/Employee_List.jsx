import "./Employee_list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Employee_Datatable from "../../components/employee_data_table/Employee_Datatable"

const Employee_List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Employee_Datatable/>
      </div>
    </div>
  )
}

export default Employee_List