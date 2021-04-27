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
    fontWeight: "600",
    textTransform: "uppercase",
  },
  slills: {
    fontSize: "16px",
    color: "#266f59",
    textTransform: "uppercase",
  },
  projectItemDetails: {
    padding: "0px 20px",
    borderBottom: "1px solid #3f51b5",
  },
  projectItemDetailsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    borderBottom: "1px solid #3f51b5",
  
  },
  projectItemDetailsContent: {
    padding: "20px 40px 20px 0",
    width: "50%",
    fontFamily: "Roboto",
    
  },
  projectItemDetailsContentTitle: {
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "600",
    color: "#3f51b5",
  },
  projectItemDetailsContentTetx: {
    fontSize: "14px",
  },
  clickClient: {
    cursor: "pointer",
    color: "#266f59",
    fontWeight: "600",
  },
  projectItemDetailsContentLink: {
    textDecoration: "none",
    color: "#266f59",
    fontWeight: "600",
  },
  projectMenu: {
    textAlign:"right",
    marginTop: "7px",
  },
  projectItemDetailsImagesWrap: {
    textAlign: "center",
  },
  projectItemDetailsImages: {
    padding: "20px 10px",
  },
  inputAddUpdateFormAvatar: {
    marginBottom: "20px",
    
    display: "none",
    "&:last-child": {
        marginBottom: "0",
    },
  },
  

}));

export default useStyles;
