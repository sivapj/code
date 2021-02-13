import React from 'react';
import classes from './Login.module.css';
import { useHistory } from 'react-router-dom';




const Login = (props) => {

    const history = useHistory();

    function Loginform () {
        let path = `/login`; 
        history.push(path);
    }
    return (
        
            <div className={classes.Login}>
                <button
                onMouseDown = {Loginform} 
                onClick={props.validate}
                className={classes.Button}
                >LOGIN
              
                </button>
           </div>
       
    )
}
export default Login;