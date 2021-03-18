import AddUpadateEmployeeForm from "../components/addUpdateEmployeeForm/AddUpdateEmployeeForm"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import {Link} from 'react-router-dom'

export default function EmpoloyeeAddUpdatePage() {
    return(
        <div>
            <h1> 
                <Link to='admin/employees'>LIST OF EMPLOYEES </Link>  
                <DoubleArrowIcon />
                <span>TODO Add or update employee</span>
            </h1>
            <AddUpadateEmployeeForm />
        </div>
    )
}