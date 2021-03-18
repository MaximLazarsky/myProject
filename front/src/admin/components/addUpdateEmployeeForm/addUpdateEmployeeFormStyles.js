import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    addUpdateForm: {
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
        maxWidth: "900px",
        width: "100%",
        padding: "30px 50px",
        boxSizing: "border-box",
        borderRadius: "5px",
        background: "#fff",
        boxShadow:"0px 0px 8px 0px rgba(34, 60, 80, 0.2)"
    },
    inputAddUpdateForm: {
        marginBottom: "30px",
        "&:last-child": {
            marginBottom: "0",
        }
    },
    addUpdateButton: {
        padding: "10px 20px",
        textTransform: "uppercase",
        width: "300px"
    },
    employeeAvatar: {
        height: "120px",
        width: "120px",
        margin: "0 auto 30px"
      },
}));

export default useStyles;