import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	clientsContainer: {
		height: "calc(100% - 200px)",
	  },
  title: {
    textTransform: "uppercase",
    fontWeight: "500",
    marginBottom: "30px",
  }
}));

export default useStyles;