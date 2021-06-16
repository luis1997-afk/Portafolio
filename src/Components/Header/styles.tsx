import {
  createStyles,
  makeStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: "100%",
      height: "5rem",
      // backgroundColor: "transparent",
      alignContent: "center",
      justifyContent: "center",
      transition: "background-color 0.5s ease-out",
      // backgroundColor: "#0A192F",
    },

    noScrollHeader: {
      backgroundColor: "transparent",
    },
    scrollHeader: {
      backgroundColor: "#0A192F",
      zIndex: 2,
      boxShadow: `0 3px 6px ${fade("#0A192F", 0.16)}, 0 3px 6px ${fade(
        "#0A192F",
        0.23
      )}`,
    },

    iconLogo: {
      margin: "auto",
      // marginTop: "2rem",
      // float: "right",
      // boxShadow: "0px 2px 2px 2px #003372",
    },

    title: {
      margin: "auto",
      fontFamily: "Courier New, sans-serif",
      fontSize: 18,
      marginTop: "2rem",
    },

    nav: {
      width: "98%",
      display: "flex",
      margin: "2rem auto",
      justifyContent: "space-between",
    },

    logo: {
      width: "3rem",
    },
  })
);
