import React from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";

import { Box, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import laptop from "../../assets/images/laptop_sin_fondo.png";
import MyStudies from "../../Components/Studies";

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item md={7} sm={12} xs={12}>
          <Img src={laptop} className={classes.gridImage} />
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Box className={classes.gridText}>
            <Typography className={classes.aboutText}>
              Hi, my name is
            </Typography>
            <Typography className={classes.aboutName}>
              Luis Flores Rodríguez
            </Typography>
            {/* <Typography className={classes.aboutText}>and, I'm a</Typography>
            <Typography className={classes.aboutDeveloper}>
              Web Developer
            </Typography>
            <Typography className={classes.aboutText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              illum nemo quod debitis velit unde autem, minus libero eveniet
              odit, adipisci laborum eaque? Dolores mollitia quos temporibus
              quas perspiciatis veritatis dolorum suscipit expedita doloribus
              ducimus ab sed voluptatem sunt, corrupti a repellendus cupiditate
              alias, porro vero. Minus accusantium soluta consequuntur.
            </Typography> */}
          </Box>
        </Grid>
      </Grid>
      <MyStudies />
    </>
  );
}
