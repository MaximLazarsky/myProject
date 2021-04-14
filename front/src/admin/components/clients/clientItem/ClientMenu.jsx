import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ClientModalContainer from './ClientModalContainer'

export default function ClientMenu({clientId,
  handleDeleteClient,
  onClickAction,
  anchorEl,
  setName,
  setSurname,
  setEmail,
  open,
  currentClientName,
  currentClientSurname,
  currentClientEmail,
  toggleOpen,
  handleClick,
  handleCloseMenu,
  handleOpenModal
  }) {

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon color="primary"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <Tooltip title={"update"} placement="top" arrow>
          <MenuItem >
            <IconButton onClick={handleOpenModal} color="primary">
              <EditIcon />
            </IconButton>
          </MenuItem>
        </Tooltip>
        <Tooltip title={"delete"} placement="bottom" arrow>
          <MenuItem onClick={handleDeleteClient}>
            <IconButton color="primary">
              <DeleteIcon />
            </IconButton>
          </MenuItem>
        </Tooltip>
      </Menu>
      <ClientModalContainer open={open} 
      toggleOpen={toggleOpen} 
      title={"Update client info"} 
      buttonName={"Update"} 
      clientId={clientId}
      currentClientName={currentClientName}
      currentClientSurname={currentClientSurname}
      currentClientEmail={currentClientEmail}
      onClickAction={onClickAction}
      setName={setName}
      setSurname={setSurname}
      setEmail={setEmail}
      />
    </div>
  );
}
