import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  checkboxIcon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "-2px 2px 4px rgba(221, 221, 221, 0.2), 2px -2px 4px rgba(221, 221, 221, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 5px rgba(221, 221, 221, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(221, 221, 221, 0.5)",
    background: theme.palette.checkboxBackground,
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.greenQ,
    backgroundImage: theme.palette.greenQ,
    borderRadius: 3,
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.greenQ,
    },
  },
}));

// Inspired by blueprintjs
export function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.checkbox}
      disableRipple
      color="default"
      checkedIcon={<span className={classes.checkedIcon} />}
      icon={<span className={classes.checkboxIcon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}
