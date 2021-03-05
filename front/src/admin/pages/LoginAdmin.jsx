import React, { useState } from 'react'
import {TextField, Button} from '@material-ui/core';
import { validateEmail } from '../helpers/validation'
import { loginAdmin } from '../redux/actions/loginAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { setErr } from '../redux/actions/loginAdmin'

export default function LoginAdmin() {
    const { err } = useSelector((state)=> state.data)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const validationEmailOnBlur = () => {
        dispatch(setErr(validateEmail(email)))
    }

    const onClickLoginAdmin = () => {
        dispatch(loginAdmin({adminEmail: email, password}))
    }

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    return(
    <div>
        <form>
            <TextField
            error = {!!err}
            label="Email"
            helperText={err}
            variant="outlined"
            onChange={onChangeEmailHandler}
            onBlur={validationEmailOnBlur}
            />
            <TextField
            error = {!!err}
            label="Password"
            // helperText={err}
            variant="outlined"
            onChange={onChangePasswordHandler}
            />
            <Button variant="outlined" color="primary" onClick={onClickLoginAdmin}>
                Login
            </Button>
        </form>
    </div>)
}