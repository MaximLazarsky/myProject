import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loginForm: {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    alignItems: "center",
  },
  input: {
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    width: "fit-content",
  },
});

export default useStyles;
