import React, { useState, useEffect } from "react";
import { Img } from "react-image";

import { AppBar, Container, IconButton, Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";
import logo from "../../assets/images/Logo4Sinfondo.png";

export default function Header() {
  const classes = useStyles();

  const [header, setHeader] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 90) {
      return setHeader(true);
    } else {
      return setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      listenScrollEvent();
    });
  }, []);

  const currPath = window.location.pathname;
  const pathPrefix = "/";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.header}
      classes={{
        colorPrimary:
          header || currPath !== pathPrefix
            ? classes.scrollHeader
            : classes.noScrollHeader,
      }}
    >
      <Toolbar>
        <Container maxWidth="xl">
          <nav className={classes.nav}>
            <Typography className={classes.title}></Typography>
            <Typography className={classes.title}>HOME</Typography>
            <IconButton className={classes.iconLogo}>
              <Img src={logo} className={classes.logo}></Img>
            </IconButton>
          </nav>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
