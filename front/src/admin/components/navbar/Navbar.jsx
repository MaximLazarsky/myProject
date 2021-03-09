import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from "react-router-dom";
import { adminRoutes } from "../../routes"
import useStyles from './navbarStyles'

export default function Navbar({onLogoutClick , isOpenMenu, onBurgerClickOpenHandler}) {
    const classes = useStyles()
    return (
    <AppBar position="fixed" className={classes.navbarBackground}>
        <Toolbar className={classes.navbarContainer}>
            <IconButton className={classes.menuButton} edge="start" color="primary" aria-label="menu" onClick={onBurgerClickOpenHandler}>
                <MenuIcon />
            </IconButton>
            <Drawer 
                variant="persistent"
                anchor="left"
                open={isOpenMenu}
                >
                    <ul className={classes.menuNavLinksList}>
                        {adminRoutes.map((el)=>{
                        return (
                            <li key={el.text}>
                                <NavLink className={classes.navBarLink} activeClassName={classes.selectedNavBarLink} to={el.path}>
                                    {el.text} 
                                </NavLink>
                            </li>
                        )})}
                    </ul>
            </Drawer>
            <ul className={classes.navLinksList}>
                {adminRoutes.map((el)=>{
                    return (
                        <li key={el.text}>
                            <NavLink className={classes.navBarLink} activeClassName={classes.selectedNavBarLink} to={el.path}>
                                {el.text} 
                            </NavLink>
                        </li>
                )})}
            </ul>
            <Button variant="outlined" color="primary" onClick={onLogoutClick}>Logout</Button>
        </Toolbar>
    </AppBar> 
    )
}

