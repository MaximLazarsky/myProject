import CachedIcon from '@material-ui/icons/Cached';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function EmployeeProjectsList({projects}) {
    return projects.length ?
        projects.map((project, index)=>
        <div key={project._id} style={{color: project.isActive ? "#000" : project.isSuccess ? "#266f59" : "#f75833"}}>
            <div> {index+1}. </div>
            <div>{project.projectName}</div>
            <div> 
                { project.isActive ? <CachedIcon/> :
                project.isSuccess ?  <ThumbUpIcon/> :
                    <ThumbDownIcon />
                }
            </div>
            <div>{project.client.clientSurname}</div>
        </div> 
    ) : <div> No projects, yet </div>
}