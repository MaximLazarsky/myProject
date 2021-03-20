import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {Button} from '@material-ui/core';
import ClientInput from './ClientInput'
import useStyles from './clientItemStyles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button className={classes.linkButtonStyles} onClick={toggleOpen} color="primary" variant="outlined" endIcon={<AccessibilityNewIcon />} >  
				add client
		  </Button>
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
              Add new client
            </h2>
            <ClientInput clientParams={"Name"}/>
            <ClientInput clientParams={"Surname"}/>
            <ClientInput clientParams={"Email"}/>
            <Button className={classes.modalButton} color="primary" variant="outlined" endIcon={<AccessibilityNewIcon /> } onClick={toggleOpen} >  
				      add client
		        </Button>
          </div>
           
        </Fade>
      </Modal>
    </div>
  );
}
      
      
      
      
      
      
      