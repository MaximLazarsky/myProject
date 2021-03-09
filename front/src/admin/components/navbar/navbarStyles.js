import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbarBackground: {
    background: "#fff",
  },
  navbarContainer: {
    margin: "0 auto",
    maxWidth: "1200px",
    width: "95%",
    justifyContent: "space-between",
    background: "#fff",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  navLinksList: {
    padding: "0",
    minWidth: "700px",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navBarLink: {
    fontFamily: "Arial",
    fontSize: "18px",
    color: "#3f51b5",
    textDecoration: "none",
    textTransform: "capitalize",
    fontWeight: "bold",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "#266f59",
      transition: "color 0.3s ease-in",
    },
  },
  selectedNavBarLink: {
    color: "#2caa52",
    transition: "color 0.3s ease-in",
  },
}));

export default useStyles;
