import React from 'react'
import LoginFormContainer from "../components/login-form/LoginFormContainer"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles((theme)=>({
    main: {
        width: "fit-content",
        padding: "50px",
        [theme.breakpoints.down("sm")]:{
            padding: "30px"
        }
    }
}))

export default function LoginAdmin() {
    const classes = useStyles()
    return(
    <Paper className={classes.main}>
        <LoginFormContainer />
    </Paper>)
}