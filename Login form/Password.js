import React, { Component } from 'react';
import classes from './Password.module.css';

const Password  = (props) => {

    

    return (
        <div className ={classes.Password}>
            <input 
            onClick={props.clicked}
            ref = {props.reference}
            type="password"
            placeholder="password"         
            value={props.pass}
            onChange={event => props.changePassword(event)} />
        </div>
    )
   
}
export default Password;