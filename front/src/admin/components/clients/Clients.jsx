import {Typography, Button} from '@material-ui/core';
import ClientsContainer from './ClientsContainer';
import useStyles from './clientsStyles';
import ClientItem from './clientItem/ClientItem'
import ClientCreateModal from './clientItem/ClientCreateModal'

export default function Clients({clients}) {
	const classes = useStyles()

	return (
	<div className={`container ${classes.clientsContainer}`}>
		<div className={classes.clientTitle}>
			<Typography variant="h4" color="primary" className={classes.title} > List of Clients: </Typography>
			<ClientCreateModal />
		</div>
	{clients.map((client) => <ClientItem key={client._id} client={client} />)}
	</div>
	)
}