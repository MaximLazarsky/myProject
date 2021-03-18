import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import { validateEmail } from '../../helpers/validation'
import { loginAdmin } from '../../redux/actions/loginAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { setErr } from '../../redux/actions/loginAdmin'
import { useHistory } from 'react-router-dom'

export default function LoginFormContainer() {
    const { err } = useSelector((state)=> state.data)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const validationEmailOnBlur = () => {
        dispatch(setErr(validateEmail(email)))
    }

    const onClickLoginAdmin = () => {
        dispatch(loginAdmin({adminEmail: email, password}))
        history.push('/admin/main')
    }

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    return <LoginForm 
        err={err} 
        validationEmailOnBlur={validationEmailOnBlur} 
        onClickLoginAdmin={onClickLoginAdmin} 
        onChangeEmailHandler={onChangeEmailHandler} 
        onChangePasswordHandler={onChangePasswordHandler} 
        />
}