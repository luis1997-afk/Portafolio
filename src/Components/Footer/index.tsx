import React from "react";
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

import { IconButton } from "@material-ui/core";

import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <IconButton className={classes.icons}>
        <FiGithub color="#8892B0" />
      </IconButton>
      <IconButton className={classes.icons}>
        <FiLinkedin color="#8892B0" />
      </IconButton>
      <IconButton className={classes.icons}>
        <FiTwitter color="#8892B0" />
      </IconButton>
      <IconButton className={classes.icons}>
        <FiInstagram color="#8892B0" />
      </IconButton>
    </footer>
  );
}
