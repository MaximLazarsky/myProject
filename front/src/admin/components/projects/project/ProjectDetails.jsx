import useStyles from './projectStyles'
import Tooltip from '@material-ui/core/Tooltip';
import ProjectMenuContainer from './ProjectMenuContainer'

export default function ProjectDetails({project, 
	clientInfo, 
	onClickClientRedirection,
	onClickCreateProjectredirection,
	projectId
}) {
	const classes = useStyles()
	
	
	return (
		<div className={classes.projectItemDetails}>	
			<div className={classes.projectItemDetailsContainer}> 
				<div className={classes.projectItemDetailsContent}>
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>client: </span>
						<Tooltip title="more info" placement="top">
							<span className={classes.clickClient} onClick={onClickClientRedirection}>
								{`${clientInfo.clientName} ${clientInfo.clientSurname}`}
							</span>
						</Tooltip>	
					</div>
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>platform: </span>
						{project.platform}
					</div>
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>task: </span>
						{project.task}
					</div>
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>discription: </span>
						{project.discription}
					</div>
				</div>

				<div className={classes.projectItemDetailsContent}>
					{project.linkProdaction ?
						<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>project link: </span>
						<Tooltip title="see project" placement="top">
							<a className={classes.projectItemDetailsContentLink} 
							href={`${project.linkProdaction}`} 
							target="blanck">{project.linkProdaction}</a>
						</Tooltip>
						</div> : null
					}
					
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>earned: </span>
						{project.earned}
					</div>
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>Start date: </span>
						{project.dateStartWorking}
					</div>
					<div className={classes.projectItemDetailsContentTetx}>
						<span className={classes.projectItemDetailsContentTitle}>Completion date: </span>
						{project.dateStopWorking}
					</div>										
				</div>

				<ProjectMenuContainer onClickCreateProjectredirection={onClickCreateProjectredirection}
				projectId={projectId}
				/>
			</div>
			<div className={classes.projectItemDetailsImagesWrap}>
				{project.imgs.map((img, index) => <img className={classes.projectItemDetailsImages} src={img} alt="" key={index}/>)}
			</div>	
		</div>
	)
}