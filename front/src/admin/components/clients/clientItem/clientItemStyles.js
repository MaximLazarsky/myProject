import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  clientItem: {
    padding: "20px",
	marginBottom: "5px" 
  },
  clientData: {
	display: "flex",
	fontFamily: "Roboto",
	fontSize: "14px",

  },
  clientDataItem: {
	width: "33%",
  },
  clietDataLeftPosition: {
	fontSize: "16px",
	fontWeight: "800",
},
  clietDataCenterPosition: {
	  textAlign: "center"
  },
  clietDataRightPosition: {
	textAlign: "right"
},
clientButtons: {
	paddingTop: "10px",
	textAlign: "right",
},
clientDataProjects: {
	display: "flex",
	justifyContent: "space-between",
},
totalAmount: {
	color: "#3f51b5",
	fontWeight: "800"
},
clientCopyEmail: {
	cursor: "pointer",
	"&:active": {
		color: "#3f51b5",
	  },
},

}));

export default useStyles;
