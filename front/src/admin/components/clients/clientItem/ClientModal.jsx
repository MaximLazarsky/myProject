import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {Button} from '@material-ui/core';
import ClientInput from './ClientInput'
import useStyles from './clientItemStyles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function ClientModal({open, 
  toggleOpen, 
  onChangeName, 
  onChangeSurname, 
  onChangeEmail,
  title,
  buttonName,
  currentClientName,
  currentClientSurname,
  currentClientEmail,
  onClickAction
  }) {

  const classes = useStyles();

  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={toggleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <IconButton className={classes.iconClose} onClick={toggleOpen} >
          <CloseIcon />
          </IconButton>
            <h2 className={classes.modalTitle}>
              {title}
            </h2>
            <ClientInput clientParams={"Name"} onChange={onChangeName} defaultValue={currentClientName}  />
            <ClientInput clientParams={"Surname"} onChange={onChangeSurname} defaultValue={currentClientSurname}/>
            <ClientInput clientParams={"Email"} onChange={onChangeEmail} defaultValue={currentClientEmail}/>
              <Button className={classes.modalButton} 
              color="primary" 
              variant="outlined" 
              endIcon={<AccessibilityNewIcon />} 
              onClick={onClickAction}>  
                {buttonName}
              </Button> :
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
      
      
      
      
      
      
      