import CachedIcon from '@material-ui/icons/Cached';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import useStyles from '../employeeStyles'

export default function EmployeeProjectsList({projects}) {
    const classes = useStyles()
    console.log("projects", projects)
    return (
        <div className={classes.employeeProjectsList}>
            {projects.length ?
            projects.map((project, index)=>
            <div 
                key={project._id} 
                style={{color: project.isActive ? "#5f5f5f" : project.isSuccess ? "#266f59" : "#f75833"}}
                className={classes.projectsItem}
                >
                <div className={classes.numberProject}> {index+1}. </div>
                <div className={classes.projectName}>{project.projectName}</div>
                <div className={classes.projectSucsses}> 
                    { project.isActive ? <CachedIcon/> :
                    project.isSuccess ?  <ThumbUpIcon/> :
                        <ThumbDownIcon />
                    }
                </div>
                <div className={classes.projectClient}>{project.client.clientSurname}</div>
            </div> 
            ) : <div className={`${classes.noProjects} ${classes.projectsItem}`}> No projects, yet </div>}
        </div>
    )
}