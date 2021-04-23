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
}));

export default useStyles;