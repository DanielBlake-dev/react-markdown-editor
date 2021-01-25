import React from "react";

import { observer } from "mobx-react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { EditorHeadline } from "./EditorHeadline";
import { EditorTextActions } from "./EditorTextActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      height: theme.spacing(5),
      padding: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  })
);

export const EditorToolbar = observer(() => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <EditorHeadline />
      <EditorTextActions />
    </div>
  );
});
