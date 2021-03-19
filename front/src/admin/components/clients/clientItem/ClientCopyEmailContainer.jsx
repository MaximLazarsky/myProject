import useStyles from './clientItemStyles';
import Tooltip from '@material-ui/core/Tooltip';

export default function ClientCopyEmailContainer({email}) {
function сopyingEmailInClipboard () {
	navigator.clipboard.writeText(email)
}
const classes = useStyles()
	return (
	<Tooltip title="Click to copy" arrow>
    	<div className={classes.clientCopyEmail} onClick={сopyingEmailInClipboard}>
	 		{email}
		</div>
    </Tooltip>	
	)
}
