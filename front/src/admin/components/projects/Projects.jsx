import useStyles from './projectsStyles'
import {Typography, Button} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ProjectContainer from './project/ProjectContainer'
import {useHistory} from 'react-router-dom'

export default function Projects({projects}) {
const classes = useStyles()
const history = useHistory()
const onClickCreateProjectRedirection = () => history.push('/admin/projects/createProject')

	return (
		<div className={`container ${classes.projectsContainer}`}>
			<div className={classes.linkButtonPosition}>
		  
				<Typography variant="h4" color="primary" className={classes.title}> List of Projects: </Typography>
				<Button className={classes.linkButtonStyles} 
				color="primary" 
				variant="outlined" 
				endIcon={<AccessibilityNewIcon />} 
				onClick={onClickCreateProjectRedirection}
				>  
					add project
				</Button>
		
			</div>
			<div> 
			{projects.map((project) => <ProjectContainer project={project} key={project._id}/>)}	
			</div>
			
			
		
		</div>
	)
}