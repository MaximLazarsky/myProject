import {Link} from 'react-router-dom'
import useStyles from './addUpdateFormStyles'
import {Typography, Button} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import InputForm from '../../../utils/InputForm'
import SelectClient from './SelectClient'
import SelectEmployee from './SelectEmployee'
import TextField from '@material-ui/core/TextField'
import Switch from './Switch'
import ImagesUploadContainer from './imagesUpload/ImagesUploadContainer'

export default function AddUpdateForm({clients, 
	employees,
	clientId,
	projectName,
	task,
	skills,
	discription,
	startDate,
	completionDate,
	projectLink,
	platform,
	earned,
	employeeId,
	isActive,
	isSuccess,
	toggleCheckedIsActive,
	toggleCheckedIsSuccess,
	onClickAddProject,
	currentProject,
	onClickBackButton,
}) {
	const classes = useStyles()
	
	return (
		<div className={`container ${classes.projectsContainer}`}>
			<div className={classes.linkButtonPosition}>
				<Button className={classes.linkButtonStyles} 
				variant="contained" 
				color="primary" 
				size="small"
				onClick={onClickBackButton}
				>
					<Link className={classes.linkButton} to='admin/projects'>BACK TO LPROJECTS </Link>  
				</Button>
				<Typography variant="h4" color="primary" className={classes.title}>
					{!!currentProject ? "Update " : "Add "}
					Projects 
				</Typography>
			</div>

			<Paper className={classes.projectForm}>
				<Typography variant="h6" color="primary" className={classes.secondTitle}> Add or update Projects </Typography>
					<div className={classes.inputFormWrap}>


						<ImagesUploadContainer />


						{!!currentProject ? null : 
						<SelectClient clientId={clientId}
						inputLabel={"Client"}
						clients={clients}
						currentProject={currentProject}
						/>
						}
						<InputForm {...projectName}
						lable={"Project name"} 
						defaultValue={currentProject.projectName}
						/>
						<InputForm {...task}
						lable={"Task"}
						defaultValue={currentProject.task} 
						/>
						<InputForm {...skills}
						lable={"Skills"} 
						defaultValue={currentProject.skills} 
						/>
						<TextField {...discription}
						className={classes.textAreaInput}
						id="outlined-multiline-flexible"
						label="Discription"
						size="small"
						multiline
						rowsMax={4}
						variant="outlined"
						value={currentProject.discription} 
       					/>						
						<InputForm {...startDate}
						lable={"Start date"} 
						defaultValue={currentProject.dateStartWorking} 						
						/>
						<InputForm {...completionDate}
						lable={"Completion date"} 
						defaultValue={currentProject.dateStopWorking} 						
						/>
						<InputForm {...projectLink}
						lable={"Project link"}
						defaultValue={currentProject.linkProdaction} 
						/>
						<InputForm {...platform}
						lable={"Platform"} 
						defaultValue={currentProject.platform} 
						/>
						<InputForm {...earned}
						lable={"Earned"} 
						defaultValue={currentProject.earned} 
						/>
						{!!currentProject ? null : 
						<SelectEmployee employeeId={employeeId}
						inputLabel={"Employee"}
						employees={employees}
						currentProject={currentProject}
						/>
						}
						<div className={classes.switch}>
							<Switch label={"is Active"}
							checked={isActive}
							onChange={toggleCheckedIsActive}
							/>
							<Switch label={"is success"}
							checked={isSuccess}
							onChange={toggleCheckedIsSuccess}
							/>
						</div>
						<Button variant="contained" 
							color="primary" 
                			className={classes.addUpdateButton}
                			onClick={onClickAddProject}
                			> 
							{!!currentProject ? "Update " : "Add "}
                		</Button>
					</div>				
			</Paper>
	</div>	
	)
}