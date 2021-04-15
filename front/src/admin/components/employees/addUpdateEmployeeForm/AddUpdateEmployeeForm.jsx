import {useState} from 'react'
import {TextField, Button, Avatar} from '@material-ui/core';
import useStyles from "./addUpdateEmployeeFormStyles"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {useHistory} from 'react-router-dom'
import InputEmployeeForm from './InputEmployeeForm'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function AddUpdateEmployeeForm({buttonName,
    open, 
    employee, 
    onClose,
    setAvatar,
    setName,
    setSurname,
    setPosition,
    setSkills,
    setExpiriense,
    setDateStartWorking,
    setInfo,
    onClickAction
}) {
    const classes = useStyles()
    const onChangeAvatar = (e) => setAvatar(e.target.value)
    const onChangeName = (e) => setName(e.target.value)
    const onChangeSurname = (e) => setSurname(e.target.value)
    const onChangePosition = (e) => setPosition(e.target.value)
    const onChangeSkills = (e) => setSkills(e.target.value)
    const onChangeExpiriense = (e) => setExpiriense(e.target.value)
    const onChangeDateStartWorking = (e) => setDateStartWorking(e.target.value)
    const onChangeInfo = (e) => setInfo(e.target.value)

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
            <form className={classes.addUpdateForm}>
                <Avatar alt="avatar" className={classes.employeeAvatar}>
                    <PersonOutlineIcon/>
                </Avatar>
                <label className={classes.lableAvatar} htmlFor="avatar">Download avatar: </label>  
                <TextField
                    className={classes.inputAddUpdateFormAvatar}
                    id="avatar"
                    variant="outlined"
                    type="file"
                    onChange={onChangeAvatar}
                />
                <InputEmployeeForm lable={"Name"} 
                onChange={onChangeName} 
                defaultValue={employee ? employee.employeeName : ''}
                />
                <InputEmployeeForm lable={"Surname"} 
                onChange={onChangeSurname}
                defaultValue={employee ? employee.employeeSurname : ''}
                />
                <InputEmployeeForm lable={"Position"} 
                onChange={onChangePosition}
                defaultValue={employee ? employee.employeePosition : ''}
                />
                <InputEmployeeForm lable={"Skills"} 
                onChange={onChangeSkills}
                defaultValue={employee ? employee.skills : ''}
                />
                
                <InputEmployeeForm lable={"Expiriense"} 
                onChange={onChangeExpiriense}
                defaultValue={employee ? employee.expiriense : ''}
                />
                <InputEmployeeForm lable={"Date Start Working"} 
                onChange={onChangeDateStartWorking}
                defaultValue={employee ? employee.dateStartWorking : ''}
                />
                <InputEmployeeForm lable={"Info"} 
                onChange={onChangeInfo}
                defaultValue={employee ? employee.info : ''}
                />
                <Button variant="outlined" 
                color="primary" 
                className={classes.addUpdateButton}
                onClick={onClickAction}
                > 
                {buttonName}
                </Button>
            </form>
        </Fade>
      </Modal>
    
    )
}