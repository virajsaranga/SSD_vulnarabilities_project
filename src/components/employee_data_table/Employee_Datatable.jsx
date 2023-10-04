import "./Employee_datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows,empColumns,empRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import {db} from "../../firebase"
import { doc, deleteDoc ,onSnapshot} from "firebase/firestore";


const Employee_Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
  // const fetchData =async()=>{
  //   let list=[]
  //   try{    const querySnapshot = await getDocs(collection(db, "city"));
  //   querySnapshot.forEach((doc) => {
  //     list.push({id:doc.id,...doc.data()})
      
  //   });
  //   setData(list)
  // }catch(err){
  //   console.log(err)
  // }

  // }
  // fetchData()

  const unsub =onSnapshot(collection(db,"employeeAllocation"),(snapshot)=>{
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

  const handleDelete = async(id) => {
    try{
      await deleteDoc(doc(db, "employeeAllocation", id));
      setData(data.filter((item) => item.id !== id));
    }catch(err){
      console.log(err)
    }
  
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
         
              <div className="viewButton">Update</div>
           
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Employee Allocation for Vehicles
        <Link to="/employee/newAllocation" className="link">
          Add New Allocation
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={empColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Employee_Datatable;
