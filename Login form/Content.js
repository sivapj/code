import React from 'react';
import classes from './Content.module.css';
const Content = (props) => {
    return (
        <div className={classes.Content}>
            <span className={classes.Reg}>Not registered</span> <span className={classes.Para}>Create an account</span>
        </div>
    )
}
export default Content;