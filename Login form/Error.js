import React from 'react';
import classes from './Error.module.css';

const Error =(props) => {
    return (
        <div className = {classes.Error}>
            Invalid {props.message}
        </div>
    )
}
export default Error;