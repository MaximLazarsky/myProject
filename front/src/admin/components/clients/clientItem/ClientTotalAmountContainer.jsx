import useStyles from './clientItemStyles';

export default function ClientTotalAmountContainer({projects}) {
	const classes = useStyles()
	const earned = projects.map((project) => +project.earned.substring(0, project.earned.length - 1))
	function add(accumulator, a) {
		return accumulator + a;
	}
    const totalSum = earned.reduce(add,0)
	return(
		<div>
			<span>total amount</span>
			<span className={classes.totalAmount}> {" " + totalSum + '$'} </span>
		</div>
	)
}