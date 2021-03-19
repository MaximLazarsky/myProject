import {Paper} from '@material-ui/core';
import ClientMenu from './ClientMenu';
import useStyles from './clientItemStyles';
import ClientTotalAmountContainer from './ClientTotalAmountContainer'
import ClientCopyEmailContainer from './ClientCopyEmailContainer'


export default function ClientItem ({client}) {
	const classes = useStyles()
	return (
		<Paper className={classes.clientItem}>
			<div className={classes.clientData}>
				<div className={`${classes.clientDataItem} ${classes.clietDataLeftPosition}`}>
					<div>
						{client.clientName}
					</div>	
					<div>
						{client.clientSurname}
					</div>
				</div>
				<ClientTotalAmountContainer projects={client.projects}/>
				<div className={`${classes.clientDataItem} ${classes.clietDataCenterPosition}`}>
					{/* {client.clientEmail} */}
					<ClientCopyEmailContainer email={client.clientEmail}/>
				</div>
				<div className={`${classes.clientDataItem} ${classes.clietDataRightPosition}`}> 
					{client.projects.length ? client.projects.map((project) => <div className={classes.clientDataProjects} key={project._id}>
						<div>
						{project.projectName}
						</div>
						<div className={classes.clientsDataProjectItem}>
						{project.earned}
						</div>
						
						</div>):<div>No projects</div>}
				</div>
				<ClientMenu />	
			</div>
        </Paper>
	)
}