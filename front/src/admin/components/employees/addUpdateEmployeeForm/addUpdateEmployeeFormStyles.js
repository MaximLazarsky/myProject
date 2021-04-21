import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: "none",
    },
    addUpdateForm: {
        border: 'none',
        outline: 'none',
        display: "flex",
        flexDirection: "column",
        margin: "20px auto",
        maxWidth: "500px",
        width: "100%",
        padding: "20px 50px",
        boxSizing: "border-box",
        borderRadius: "5px",
        background: "#fff",
        boxShadow:"0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
        
    },
    inputAddUpdateForm: {
        marginBottom: "20px",
        "&:last-child": {
            marginBottom: "0",
        }
    },
    inputAddUpdateFormAvatar: {
        marginBottom: "20px",
        
        display: "none",
        "&:last-child": {
            marginBottom: "0",
        },
       
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
      }
}));

export default useStyles;