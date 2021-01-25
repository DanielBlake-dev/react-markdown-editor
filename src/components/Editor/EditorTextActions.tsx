import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import { getTextActions, TextActionsType } from "../../settings/blockTypes";
import { useMarkdownStore } from "../../hooks/useMarkdownStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      paddingLeft: theme.spacing(2),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
  })
);

const textActions = getTextActions();

export const EditorTextActions = () => {
  const classes = useStyles();
  const markdownStore = useMarkdownStore();

  const handleClick = (textAction: TextActionsType) => {
    markdownStore.setCurrentMarkdownBlock(textAction);
  };

  return (
    <div className={classes.actions}>
      {textActions.map((txAc) => (
        <IconButton
          aria-label={txAc.value}
          onClick={() => handleClick(txAc.value)}
          key={txAc.value}>
          <txAc.label />
        </IconButton>
      ))}
    </div>
  );
};
