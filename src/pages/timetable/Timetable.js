import React, { useState }  from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { travels } from '../../travelsSourse';
import DatePicker from "react-datepicker";
import "./Timetable.scss";
import Swal from 'sweetalert2'
import {auth,db, storage} from "../../firebase"
import { useNavigate } from "react-router-dom";
import {addDoc, collection, doc,serverTimestamp,setDoc} from 'firebase/firestore'

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events=travels

const Timetable = () => {

  const [newEvent, setNewEvent] = useState({ title:"", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

 

  function handleAddEvent () {
            
            const d1 = new Date(newEvent.start);
            
            const d2 = new Date(newEvent.end);
            if (d1>d2)
            {   
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Estimated destination time should be happen after the Departure Time!',
                
              })
                
             }else{
              
      setAllEvents([...allEvents, newEvent]);
      
      try{  
      // const res =await createUserWithEmailAndPassword(
      //  auth,
      //  data.email,
      //  data.password
      // )   
     addDoc(collection(db,"Travals"),{
       ...newEvent,
       timeStamp:serverTimestamp()
      });
      
    }catch(err){
       console.log(err)
    }
             }



      
  }


  const [value, onChange] = useState(new Date());





  return (
    <div>
     <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>


        <div>

        
    
    <div>
    
       

<div  className='newtravel'>
      
            <h2  >Add New Travel</h2>
           <div>
           <div class="row">
       <div class="col-md-6 ">
  <div class="form-group row">
    
    <label for="staticEmail" class=" col-form-label">Travel Title</label>
      <input type="text" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
  </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div class="col-md-2 ">
  <div class="form-group row">
    <label for="inputPassword" class=" col-form-label">Travel Departure Time</label>
   
    <DatePicker  selected={newEvent.start}  onChange={(start) => setNewEvent({ ...newEvent, start })} showTimeSelect dateFormat="Pp" />
    
  </div>
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="col-md-3 ">
  <div class="form-group row">
    <label for="inputPassword" class=" col-form-label"> Arrival Time to Destination</label>
   
    <DatePicker  selected={newEvent.end}  onChange={(end) => setNewEvent({ ...newEvent, end })} showTimeSelect dateFormat="Pp" />
  
  </div>
  
  <button className="btn btn-dark m-3" onClick={handleAddEvent}>
                    Add Travel
               </button>

               </div>
            
            </div>

            </div>

</div>

<h2 className='header'>Travel TimeTable</h2>

<div className='calender'>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 600, margin: "50px" }} />
        </div>
    </div>
  ); 
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          </div>   



      





      </div>
    </div>


    </div>
  )
}

export default Timetable 