import React, { useState, useEffect, useRef } from 'react';
import classes from './Reservationform.module.css';
import {BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import Button from './Button';
import { useHistory } from "react-router-dom";



const Reservationform = (props) => {

    let myref= useRef();
    let history = useHistory();

    const [Data,setData] = useState({
        datalist : [
            {
                name: "",
                email: "",
                roomType: "",
                arrivalDate: "",
                depatureDate: "",
                numberofGuests: "",
                freePickup: "",
                flightNumber: "",
                specialRequest: "",
            },
            { showDetails : false }
        ]
    });
     
  
        useEffect( () => {
           setTimeout (() => {
               setData({
                datalist : [
                    {
                        name: "johnDoe",
                        email: "johndoe@example.com",
                        roomType: "Deluxe",
                        arrivalDate: "2020-07-21T02: 24: 10.624Z",
                        depatureDate: "2020-07-25T02: 24: 10.624Z",
                        numberofGuests: 3,
                        freePickup: false,
                        flightNumber: "987643812L",
                        specialRequest: "Need a premium cab facility",
                       
                    },
                   { showDetails : true}
                ]
               })
           },2000)
        },[]);

        let pathChanger = () => {               
            history.push("/");
        }
    
   
        
  
        return (
           <Router>
            <div>                               
                <div  className={classes.Form} >
                     <label>
                        Name 
                        <input ref={myref} type="text" placeholder="name" value={Data.datalist[0].name}/>
                    </label> 
                    <label>
                        Email 
                        <input type="email" placeholder="Email" value={Data.datalist[0].email} />
                    </label>
                    <label>
                        Room Type 
                        <select for="Room Type" >
                            <option value="deluxe">{Data.datalist[0].roomType}</option>
                        </select>
                    </label>
                    <label>
                        Arrival Date 
                        <input type="date/text" name="arrival date" value={Data.datalist[0].arrivalDate}/>
                    </label>
                    <label>
                        Departure Date 
                        <input type="date/text" name="Departure date" value={Data.datalist[0].depatureDate} />
                    </label>
                   
                    <label>
                        Number of Guests
                        <select for=" Number of Guests">
                            <option value="1" >{Data.datalist[0].numberofGuests}</option>
                            
                        </select>
                    </label>
                    <label>
                       Free Pickup 
                        <input type="radio" name="yes" value={Data.datalist[0].freePickup}/>
                        <span>Yes</span>
                        <input type="radio" name="no" value={Data.datalist[0].freePickup}/>
                        <span>No</span>
                    </label>
                    <label>
                        Flight Number 
                        <input type="text/number" name="number" value={Data.datalist[0].flightNumber} placeholder="Filght Number"/>
                    </label>
                    <label>
                       Special Requests
                       <textarea name=" Special Requests" rows="2" cols="30" value={Data.datalist[0].specialRequest}></textarea>
                     </label>
                       <Button click={pathChanger}   />                 
                </div> 
            </div>
           </Router>
        )
    
}

export default Reservationform;