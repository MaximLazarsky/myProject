import {Paper} from '@material-ui/core';
import useStyles from './clientItemStyles';

export default function ClientItem ({client}) {
console.log(client)
	const classes = useStyles()
	return (
		<Paper className={classes.clientItem}>
			<div>
				<div>
					{client.clientName}
				</div>	
				<div>
					{client.clientSurname}
				</div>
				<div>
					{client.clientEmail}
				</div>
			</div>
            <hr/>
        </Paper>
		
	)
}