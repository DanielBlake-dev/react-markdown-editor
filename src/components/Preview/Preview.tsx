import React from "react";

import { observer } from "mobx-react";
import { toJS } from "mobx";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
// @ts-ignore
import highlight from "remark-highlight.js";

import { useMarkdownStore } from "../../hooks/useMarkdownStore";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    preview: {
      padding: theme.spacing(8),
    },
  })
);

export const Preview = observer(() => {
  const classes = useStyles();
  const markdownStore = useMarkdownStore();
  return (
    <div className={classes.preview}>
      <ReactMarkdown plugins={[gfm, highlight]}>
        {toJS(markdownStore.markdownText)}
      </ReactMarkdown>
    </div>
  );
});
