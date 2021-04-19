import {TextField, Button, Avatar} from '@material-ui/core';
import useStyles from "./addUpdateEmployeeFormStyles"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import InputEmployeeForm from './InputEmployeeForm'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FileUpload from '../../fileUpload/FileUpload'

export default function AddUpdateEmployeeForm({buttonName,
    open, 
    employee, 
    onClose,
    avatar,
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
    console.log("avatar", avatar)

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
                <Avatar alt="avatar" className={classes.employeeAvatar}>
                   {avatar ? <img className={classes.productImg}  src={`/uploads/${avatar}`} alt="img"/> : <PersonOutlineIcon/>}
                </Avatar>
                {/* <label className={classes.lableAvatar} htmlFor="avatar">Download avatar: </label>  
                <TextField
                    {...avatar}
                    className={classes.inputAddUpdateFormAvatar}
                    id="avatar"
                    variant="outlined"
                    type="file"
                /> */}



                {/* end point at here  */}

                



                <FileUpload />
                <InputEmployeeForm {...name}
                lable={"Name"} 
                defaultValue={employee ? employee.employeeName : ''}
                />
                <InputEmployeeForm {...surname}
                lable={"Surname"} 
                defaultValue={employee ? employee.employeeSurname : ''}
                />
                <InputEmployeeForm {...position}
                lable={"Position"} 
                defaultValue={employee ? employee.employeePosition : ''}
                />
                <InputEmployeeForm {...skills}
                lable={"Skills"} 
                defaultValue={employee ? employee.skills : ''}
                />
                <InputEmployeeForm {...expiriense}
                lable={"Expiriense"} 
                defaultValue={employee ? employee.expiriense : ''}
                />
                <InputEmployeeForm {...dateStartWorking}
                lable={"Date Start Working"} 
                defaultValue={employee ? employee.dateStartWorking : ''}
                />
                <InputEmployeeForm {...info}
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