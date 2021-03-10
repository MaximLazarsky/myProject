import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  employeeItem: {
    marginBottom: "20px",
  },
  employeeItemTitle: {
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
  position: {
    fontSize: "16px",
    color: "#266f59",
    textTransform: "uppercase",
  },
  employeeItemDetails: {
    padding: "0px 20px",
    borderBottom: "1px solid #3f51b5"
  },
  employeeAvatar: {
    height: "120px",
    width: "120px",
  },
  employeeItemDetailsContent: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto",
    borderBottom: "1px solid #3f51b5"
  },
  emplaoyeeButtons: {
    textAlign: "end",
    padding: "20px 0",
  },
}));

export default useStyles;
