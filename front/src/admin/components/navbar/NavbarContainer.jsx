import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { togleIsLogin } from '../../redux/actions/loginAdmin'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function NavbarContainer() {
    const dispatch = useDispatch() 
    const history = useHistory()

    const onLogoutClick = () => {
        dispatch(togleIsLogin())
        localStorage.removeItem("Authorization")
        history.push('/admin')
    }

    return <Navbar onLogoutClick={onLogoutClick}/>
}