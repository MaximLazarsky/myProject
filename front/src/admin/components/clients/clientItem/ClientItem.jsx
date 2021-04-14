import {Paper} from '@material-ui/core';
import ClientMenuContainer from './ClientMenuContainer';
import useStyles from './clientItemStyles';
import ClientTotalAmount from './ClientTotalAmount'
import ClientCopyEmail from './ClientCopyEmail'
import {useState} from 'react'

export default function ClientItem ({client}) {
	const classes = useStyles()
	const [isCopied, setIsCopyed] = useState(false)
	function сopyingEmailInClipboard () {
		navigator.clipboard.writeText(client.clientEmail)
		setIsCopyed(true)
	}
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
				<ClientTotalAmount projects={client.projects}/>
				<div className={`${classes.clientDataItem} ${classes.clietDataCenterPosition}`}>
					<ClientCopyEmail email={client.clientEmail} 
					isCopied={isCopied} 
					сopyingEmailInClipboard={сopyingEmailInClipboard}/>
				</div>
				<div className={`${classes.clientDataItem} ${classes.clietDataRightPosition}`}> 
					{client.projects.length ? client.projects.map((project) => 
					<div className={classes.clientDataProjects} key={project._id}>
						<div>
						{project.projectName}
						</div>
						<div className={classes.clientsDataProjectItem}>
						{project.earned}
						</div>
					</div>) : <div>No projects</div>}
				</div>
				<ClientMenuContainer clientId={client._id}/>	
			</div>
        </Paper>
	)
}