import useStyles from './clientItemStyles';
import Tooltip from '@material-ui/core/Tooltip';

export default function ClientCopyEmail({email, сopyingEmailInClipboard}) {

const classes = useStyles()
	return (
	<Tooltip title={"Click to copy"} arrow>
    	<div className={classes.clientCopyEmail} onClick={сopyingEmailInClipboard}>
	 		{email}
		</div>
    </Tooltip>	
	)
}
