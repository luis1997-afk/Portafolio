import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      height: "100vh",
      // backgroundColor: "#0A192F",
      backgroundSize: "cover",
    },
    gridText: {
      color: "white",
      marginLeft: 0,
      marginTop: "4.5rem",
    },
    aboutText: {
      fontSize: 13,
      marginBottom: "2rem",
    },
    aboutName: {
      fontSize: 27,
      marginBottom: "2rem",
      fontWeight: "bold",
    },
    aboutDeveloper: {
      fontSize: 21,
      fontWeight: "bold",
      marginBottom: "2rem",
    },
  })
);
