
import {Paper} from '@material-ui/core';
import ProjectTitle from './ProjectTitle'
import ProjectDetailsContainer from './ProjectDetailsContainer'
import useStyles from './projectStyles';

export default function Project({project, isOpenEmployeeItem, onEployeesItemClick}) {
	const classes = useStyles()

	return (
		<div>
			<Paper className={classes.projectItem}>
				<ProjectTitle project={project} isOpenEmployeeItem={isOpenEmployeeItem} onEployeesItemClick={onEployeesItemClick}/>
				{ isOpenEmployeeItem && <ProjectDetailsContainer project={project}/>}
			</Paper>
		</div>
	)
}
