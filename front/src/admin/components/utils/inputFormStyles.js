
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	inputAddUpdateForm: {
        marginBottom: "15px",
        "&:last-child": {
            marginBottom: "0",
        },
        // width: "70%",
    },
}))

export default useStyles;