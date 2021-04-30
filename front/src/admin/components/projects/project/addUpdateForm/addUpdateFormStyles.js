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
    color: "#fff",
	textDecoration: "none",
	padding: "5px",
  },
  projectForm: {
	  textAlign: "center",
	  margin: "0 auto",
	  padding: "20px"
  },
  secondTitle: {
	textTransform: "uppercase",
  },
  inputFormWrap: {
	border: 'none',
	outline: 'none',
	display: "flex",
	flexDirection: "column",
	margin: "0 auto",
	maxWidth: "500px",
	width: "100%",
	padding: "20px",
  },
  select: {
	  marginBottom: "10px",
  },
  textAreaInput: {
    marginBottom: "15px",
  },
  switch: {
    display: "flex",
    justifyContent: "center",
    margin: "0 30px",
  },
  addUpdateButton: {
    width: "200px",
    margin: "15px auto 0 auto",
  },
  lableAvatar: {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    fontWeight:"400",
    color: "rgb(118, 118, 118)",
    border: "solid 1px rgb(223, 223, 223)",
    borderRadius: "4px",
    padding: "10.5px 14px",
    marginTop: "27px",
    marginBottom: "30px",
    "&:hover": {
        border: "solid 1px rgb(59, 59, 59)",
        cursor: "pointer",
      },
},
addUpdateButton: {
    padding: "10px 20px",
    textTransform: "uppercase",
    width: "300px",
    margin: "0 auto"
},
uploadImgWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
uploadButton: {
    padding: "8px 14px",
    marginLeft: "15px",
},
employeeAvatar: {
    height: "70px",
    width: "70px",
    margin: "0 auto 20px"
  },
  uploaded: {
    textAlign: "center"
  },
  uploadedImg: {
      height: "90px",
      width: "90px",
      borderRadius: "50%",
      border: "3px solid #3f51b5",
      margin: "0 auto",
      textAlign: "center"
  },
  toastContainer: {
      height: "800px"
  },
  inputAddUpdateFormImg: {
    marginBottom: "20px",
 
    display: "none",
    "&:last-child": {
        marginBottom: "0",
    },
  },
  
  earnedAndSelectMoney: {
    display: "flex",
    justifyContent: "space-between",
  },
  earned: {
    padding: "120px !important",

  },
}));

export default useStyles;