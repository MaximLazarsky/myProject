import AddUpadateEmployeeForm from "../components/employees/addUpdateEmployeeForm/AddUpdateEmployeeForm"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    title: {
        textTransform: "uppercase",
        fontWeight: "500",
        marginBottom: "30px",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            fontWeight: "400",
            fontSize: "24px",
            color: "#5f5f5f"
        }
      }
}))

export default function EmpoloyeeAddUpdatePage() {
    const classes = useStyles()
    return(
        <div className={`container`}>
            <Typography variant="h4" color="primary" className={classes.title}> 
                <Link to='admin/employees'>LIST OF EMPLOYEES </Link>  
                <DoubleArrowIcon />
                <span>TODO Add or update employee</span>
            </Typography>
            <AddUpadateEmployeeForm />
        </div>
    )
}