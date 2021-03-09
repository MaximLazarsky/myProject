import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { togleIsLogin } from '../../redux/actions/loginAdmin'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function NavbarContainer() {
    const dispatch = useDispatch() 
    const history = useHistory()
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const onLogoutClick = () => {
        dispatch(togleIsLogin())
        localStorage.removeItem("Authorization")
        history.push('/admin')
    }

    const onBurgerClickOpenHandler = () => setIsOpenMenu(true)

    return <Navbar onLogoutClick={onLogoutClick} isOpenMenu={isOpenMenu} onBurgerClickOpenHandler={onBurgerClickOpenHandler} />
}