import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  projectItem: {
    marginBottom: "20px",
  },
  projectItemTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px 20px",
    borderBottom: "1px solid #3f51b5",
  },
  name: {
    fontSize: "18px",
    fontWeight: "400",
  },
  discription: {
    fontSize: "16px",
    color: "#266f59",
    textTransform: "uppercase",
  },
  projectItemDetails: {
    padding: "0px 20px",
    borderBottom: "1px solid #3f51b5",
  },
  
  projectItemDetailsContent: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto",
    borderBottom: "1px solid #3f51b5",
  },
  projectItemDetailsContentTetx: {
    width: "50%"
  },
  employeeItemDetailsContentInfo: {
    fontSize: "14px",
    "& span": {
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "600",
      margimRight: "10px",
      color: "#3f51b5",
    }
  },
  employeeItemDetailsContentSkills: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#266f59",
    marginTop: "15px",
    "& span": {
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "600",
      margimRight: "10px",
      color: "#3f51b5",
    }
  },

  employeeItemDetailsContentExpiriense: {
    fontSize: "12px",
    color: "#5f5f5f",
    textAlign: "end",
    marginTop: "15px",
    "& span": {
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "400",
      margimRight: "10px",
    }
  },
  emplaoyeeButtons: {
    textAlign: "end",
    padding: "20px 0",
  },
  employeeProjectsList: {
    width: "30%"
  },
  projectsItem: {
    display: "flex",
    width: "100%",
    fontSize: "14px",
    marginBottom: "5px"
  },
  projectClient: {
    marginLeft: "auto"
  },
  projectName: {
    marginLeft: "10px",
    textTransform: "capitalize",
    width: "45%"
  },
  projectSucsses: {
    margin: "0 20px",
    "& svg": {
      width: "15px",
      height: "15px"
    }
  },
  noProjects: {
    justifyContent: "center",
    color: "#5f5f5f",
    fontSize: "16px",
  },
  personIcon: {
    height: "100px",
    width: "100px",
  },
}));

export default useStyles;
