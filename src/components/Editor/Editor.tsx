import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { observer } from "mobx-react";

import { EditorToolbar } from "./EditorToolbar";
import { EditorTextArea } from "./EditorTextArea";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      height: "100vh",
    },
  })
);

export const Editor = observer(() => {
  const classes = useStyles();
  return (
    <div className={classes.editor}>
      <EditorToolbar />
      <EditorTextArea />
    </div>
  );
});
