import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "fixed",
      backgroundColor: "transparent",
      bottom: 0,
      width: "100%",
      textAlign: "center",
    },
    icons: {
      justifyItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
      backgroundColor: "#0A192F",
      marginLeft: "1rem",
    },
  })
);
