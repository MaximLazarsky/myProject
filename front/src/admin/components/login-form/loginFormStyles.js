import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginForm: {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      minWidth: "200px",
    },
  },
  input: {
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    width: "fit-content",
  },
}));

export default useStyles;
