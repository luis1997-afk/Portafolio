import React from "react";
import { BiLaptop, BiBookBookmark, BiUser } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" className={classes.timeLine}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector className={classes.secondaryTail} />
          <TimelineDot className={classes.timeLineDotSelected}>
            <BiUser className={classes.icon} />
          </TimelineDot>
          <Typography className={classes.textDescription}>AboutMe</Typography>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.timeLineDot}>
            <BiBookBookmark className={classes.icon} />
          </TimelineDot>
          <Typography className={classes.textDescription}>Studies</Typography>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.timeLineDot}>
            <BiLaptop className={classes.icon} />
          </TimelineDot>
          <Typography className={classes.textDescription}>Projects</Typography>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={classes.timeLineDot}>
            <SiGmail className={classes.icon} />
          </TimelineDot>
          <Typography className={classes.textDescription}>Contact</Typography>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
    </Timeline>
  );
}
