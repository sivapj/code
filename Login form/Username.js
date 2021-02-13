import React, { Component } from 'react';
import classes from './Username.module.css';

const Username = props => {
   
 
        return (
            <div className={classes.Username}>
                <input
                type ="text"
                placeholder ="username"
                onClick={props.clicked}
                ref ={props.reference}  
                onChange={event => props.changeName(event)}
                value={props.name} />
            </div>
        )
    
   
}
export default Username;