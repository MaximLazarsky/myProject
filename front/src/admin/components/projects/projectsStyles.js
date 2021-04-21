import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
projectsContainer: {
    height: "calc(100% - 200px)",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "500",
    marginBottom: "30px",
  },
  linkButtonPosition: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkButtonStyles: {
    height: "40px",
  },
  linkButton: {
    textDecoration: "none"
  },
}));

export default useStyles;