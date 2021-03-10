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
    padding: "10px 20px",
  },
  employeeAvatar: {
    height: "120px",
    width: "120px",
  },
  employeeItemDetailsContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto",
  },
  emplaoyeeButtons: {
    textAlign: "end",
  },
}));

export default useStyles;
