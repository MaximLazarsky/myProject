import {Button} from '@material-ui/core';
import useStyles from "./addUpdateEmployeeFormStyles"
import InputForm from '../../utils/InputForm'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AvatarUploadContainer from '../employee/avatarUpload/AvatarUploadContainer'


export default function AddUpdateEmployeeForm({buttonName,
    open, 
    employee, 
    onClose,
    name,
    surname,
    position,
    skills,
    expiriense,
    dateStartWorking,
    info,
    onClickAction,
}) {
    const classes = useStyles()
    return(
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} >
            <div className={classes.addUpdateForm}>
                <AvatarUploadContainer employee={employee}/>
                <InputForm {...name}
                lable={"Name"} 
                defaultValue={employee ? employee.employeeName : ''}
                />
                <InputForm {...surname}
                lable={"Surname"} 
                defaultValue={employee ? employee.employeeSurname : ''}
                />
                <InputForm {...position}
                lable={"Position"} 
                defaultValue={employee ? employee.employeePosition : ''}
                />
                <InputForm {...skills}
                lable={"Skills"} 
                defaultValue={employee ? employee.skills : ''}
                />
                <InputForm {...expiriense}
                lable={"Expiriense"} 
                defaultValue={employee ? employee.expiriense : ''}
                />
                
                <InputForm {...dateStartWorking}
                lable={"Date Start Working"} 
                defaultValue={employee ? employee.dateStartWorking : ''}
                />
            
                
                <InputForm {...info}
                lable={"Info"} 
                defaultValue={employee ? employee.info : ''}
                />
                <Button variant="outlined" 
                color="primary" 
                className={classes.addUpdateButton}
                onClick={onClickAction}
                > 
                {buttonName}
                </Button>
            </div>
        </Fade>
      </Modal>
    )
}