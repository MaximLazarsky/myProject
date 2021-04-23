import {Link} from 'react-router-dom'
import useStyles from './addUpdateFormStyles'
import {Typography, Button} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import InputForm from '../../../utils/InputForm'
import SelectClient from './SelectClient'
import SelectEmployee from './SelectEmployee'
import TextField from '@material-ui/core/TextField'
import Switch from './Switch'

export default function AddUpdateForm({clients, 
	employees,
	handleChangeClientId, 
	handleChangeEmployeeId,
	isActive,
	isSuccess,
	toggleCheckedIsActive,
	toggleCheckedIsSuccess,
	onClickButton
}) {
	const classes = useStyles()
	
	return (
		<div className={`container ${classes.projectsContainer}`}>
			<div className={classes.linkButtonPosition}>
				<Button className={classes.linkButtonStyles} variant="contained" color="primary" size="small">
					<Link className={classes.linkButton} to='admin/projects'>BACK TO LPROJECTS </Link>  
				</Button>
				<Typography variant="h4" color="primary" className={classes.title}> Add or update Projects </Typography>
			</div>

			<Paper className={classes.projectForm}>
				<Typography variant="h6" color="primary" className={classes.secondTitle}> Add or update Projects </Typography>
					<div className={classes.inputFormWrap}>
						<SelectClient inputLabel={"Client"}
						clients={clients}
						handleChangeClientId={handleChangeClientId}
						/>
						<InputForm lable={"Project name"} />
						<InputForm lable={"Task"} />
						<InputForm lable={"Skills"} />
						<TextField className={classes.textAreaInput}
						id="outlined-multiline-flexible"
						label="discription"
						size="small"
						multiline
						rowsMax={4}
						variant="outlined"
       					/>						
						<InputForm lable={"Start date"} />
						<InputForm lable={"Completion date"} />
						<InputForm lable={"Project link"} />
						<InputForm lable={"Platform"} />
						<InputForm lable={"Earned"} />
						<SelectEmployee inputLabel={"Employee"}
						employees={employees}
						handleChangeEmployeeId={handleChangeEmployeeId}
						/>
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
                			onClick={onClickButton}
                			> 
                				Add/update
                		</Button>
					</div>				
			</Paper>
	</div>	
	)
}