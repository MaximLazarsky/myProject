import useStyles from './projectStyles'
import {IconButton, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function EmployeeTitle({project, isOpenEmployeeItem, onEployeesItemClick}) {
    const classes = useStyles()
    return(
        <div className={classes.projectItemTitle} onClick={onEployeesItemClick}>
            <Typography variant="h6" className={classes.name}>
                {`${project.projectName}`}
            </Typography>
            <Typography variant="h6" className={classes.discription}>
                {project.task}
            </Typography>
            <IconButton color="primary" style={{transform: isOpenEmployeeItem ? "rotate(180deg)" : "", transition: "all 0.3s"}}>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    )
}