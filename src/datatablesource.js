export const userColumns = [
  { field: "id", headerName: "ID", width: 170 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

export const empColumns = [
  {
    field: "Employee",
    headerName: "Vehicle",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "BusNumber",
    headerName: "BusNumber",
    width: 230,
  },

  {
    field: "BusRoute",
    headerName: "BusRoute",
    width: 100,
  },
  {
    field: "Driver",
    headerName: "Driver",
    width: 150,
  },
  {
    field: "Conductor",
    headerName: "Conductor",
    width: 150,
  },
  {
    field: "inspector",
    headerName: "Inspector",
    width: 150,
  },
];

//BusRouteColumns...............
export const BusRouteColumns = [
  {
    field: "Busses",
    headerName: "Bus",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "RouteName",
    headerName: "RouteName",
    width: 230,
  },

  {
    field: "RouteID",
    headerName: "RouteID",
    width: 100,
  },
  {
    field: "RouteTime",
    headerName: "RouteTime",
    width: 150,
  },
  {
    field: "BusNumber",
    headerName: "BusNumber",
    width: 150,
  },
];
