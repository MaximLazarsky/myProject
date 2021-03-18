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
	paddingBottom: "15px",
    borderBottom: "1px solid #3f51b5",
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
// clientsDataProjectItem: {
// 	marginLeft: "40px"
// }
}));

export default useStyles;
