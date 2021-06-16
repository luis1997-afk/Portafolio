import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      height: "100vh",
      backgroundColor: "#0A192F",
      // backgroundImage:
      // "radial-gradient(circle at 87.17% 67.33%, #656768 0, #455661 25%, #1f4459 50%, #003352 75%, #00234b 100%)",
      backgroundSize: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    gridImage: {
      width: "50%",
      marginLeft: "15rem",
    },
    gridText: {
      color: "white",
      fontWeight: "bold",
      display: "block",
      position: "relative",
      // background: "rgba( 255, 255, 255, 0.30 )",
      // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      // backdropFilter: "blur(20.0px)",
      // WebkitBackdropFilter: "blur(20.0px)",
      // borderRadius: "10px",
      // border: "1px solid rgba( 255, 255, 255, 0.18 )",
      // padding: "2rem",
    },
    aboutText: {
      fontSize: 15,
      marginBottom: "2rem",
      textShadow: "2px 2px 2px #1778B4",
      fontFamily: "Courier New",
    },
    aboutName: {
      fontSize: 67,
      // marginBottom: "2rem",
      fontWeight: "bold",
      textShadow: "2px 2px 2px #1778B4",
      fontFamily: "Helvetica",
    },
    aboutDeveloper: {
      fontSize: 21,
      fontWeight: "bold",
      marginBottom: "2rem",
      textShadow: "2px 2px 2px #1778B4",
      fontFamily: "Courier New",
    },
  })
);
