import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './projectStyles'

export default function ProjectMenu({onClickCreateProjectredirection, onClickDeleteProject}) {
	const classes=useStyles()

  return (
    <div className={classes.projectMenu}>
        <Tooltip title={"update"} placement="top" arrow>
            <IconButton color="primary" onClick={onClickCreateProjectredirection}>
              <EditIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title={"delete"} placement="bottom" arrow>
            <IconButton color="primary" onClick={onClickDeleteProject}>
              <DeleteIcon />
            </IconButton>
        </Tooltip>

    </div>
  );
}
