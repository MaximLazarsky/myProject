import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {Button} from '@material-ui/core';
import ClientInput from './ClientInput'
import useStyles from './clientItemStyles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from "react-redux"
import {updateClient} from "../../../redux/actions/clients"

export default function UpdateClient({open, handleClose, clientId, clients}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const indexOfId = clients.findIndex(i => i._id === clientId.toString())
  const currentClient = clients[indexOfId]

  const handleUpdateClient = () => {
    dispatch(updateClient({clientId, name, surname, email}))
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <IconButton className={classes.iconClose} onClick={handleClose} >
          <CloseIcon />
          </IconButton>
            <h2 className={classes.modalTitle}>
              Update client info
            </h2>
            <ClientInput required
                        clientParams={"Name"}
                        defaultValue={currentClient.clientName}  
                        onChange={(e)=> setName(e.target.value)}/>
            <ClientInput required 
                        clientParams={"Surname"}
                        defaultValue={currentClient.clientSurname} 
                        onChange={(e)=> setSurname(e.target.value)}/>
            <ClientInput required 
                        clientParams={"Email"}
                        defaultValue={currentClient.clientEmail} 
                        onChange={(e)=> setEmail(e.target.value)}/>
            <Button className={classes.modalButton} 
                    color="primary" 
                    variant="outlined" 
                    endIcon={<AccessibilityNewIcon /> } 
                    onClick={handleUpdateClient}>  
				      Update
		        </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}