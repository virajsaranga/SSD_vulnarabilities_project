import "./BussRoutes_list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import BussRoutes_Datatable from "../../components/BussRoutes_Data_table/BussRoutes_Datatable";

const BussRoutes_list = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <BussRoutes_Datatable />
      </div>
    </div>
  );
};

export default BussRoutes_list;
