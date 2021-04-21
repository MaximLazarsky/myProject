import useStyles from './projectStyles'

export default function ProjectDetails({project, currentClient}) {
	const classes = useStyles()

	return (
		<div className={classes.projectItemDetails}> 
			<div className={classes.projectItemDetailsContent}>
			<div className={classes.projectItemDetailsContentTetx}>
				<span> information: </span>
				{`${currentClient.clientName} ${currentClient.clientSurname}`}
			</div>
			<div className={classes.projectItemDetailsContent}>
				{project.skills}
			</div>
			</div>
		</div>
	)
}