import React from 'react'
import {TextField, Button} from '@material-ui/core';
import useStyles from './loginFormStyles'

export default function LoginForm({err, validationEmailOnBlur, onClickLoginAdmin, onChangeEmailHandler, onChangePasswordHandler}) {
    const classes  = useStyles()

    return(
        <form className={classes.loginForm}>
            <TextField
            className = {classes.input}
            error = {!!err}
            label="Email"
            helperText={err}
            variant="outlined"
            onChange={onChangeEmailHandler}
            onBlur={validationEmailOnBlur}
            />
            <TextField
            className = {classes.input}
            error = {!!err}
            label="Password"
            variant="outlined"
            onChange={onChangePasswordHandler}
            />
            <Button className = {classes.button} variant="outlined" color="primary" onClick={onClickLoginAdmin}>
                Login
            </Button>
        </form>
        )
}