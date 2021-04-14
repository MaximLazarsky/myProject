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
modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#fff",
    border: 'none',
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 8, 3),
  },
modalTitle: {
	textAlign: "center",
	fontFamily: "Roboto",
	fontSize: "18px",
	padding: "20px 0",
	textTransform: "uppercase",
	color: "#3f51b5",
},
modalButton: {
	marginTop: "20px",
	marginLeft:"40px",
	marginBottom: "5px",
	textAlign: "center",
},
iconClose: {
	marginLeft: "80px",
	color: "#3f51b5",
},
  input: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default useStyles;
