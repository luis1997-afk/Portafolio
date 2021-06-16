import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    secondaryTail: {
      // backgroundColor: "#19967D",
      backgroundColor: "transparent",
      height: "5.9rem",
      width: "0.5px",
    },

    textDescription: {
      color: "#8892B0",
      fontSize: 10,
    },

    timeLine: {
      position: "fixed",
      bottom: "-1.5rem",
      left: "1rem",
    },

    icon: {
      width: "1.3rem",
      height: "1.3rem",
    },

    timeLineDot: {
      backgroundColor: "#0A192F",
      opacity: "0.5",
    },

    timeLineDotSelected: {
      backgroundColor: "#19967D",
      border: "solid #19967D",
    },
  })
);
