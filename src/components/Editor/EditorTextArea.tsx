import React, { useEffect, useRef, useState } from "react";

import { observer } from "mobx-react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import { useMarkdownStore } from "../../hooks/useMarkdownStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textAreaWrapper: {
      width: "100%",
      height: "100%",
    },
    textArea: {
      width: "100%",
      height: "100%",
      borderColor: theme.palette.divider,
      padding: theme.spacing(2),
      font: theme.typography.body1.font,
    },
  })
);

export const EditorTextArea = observer(() => {
  const classes = useStyles();
  const markdownStore = useMarkdownStore();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState<string>("");

  const handleSave = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const key = e.key;

    if (
      (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
      key === "s"
    ) {
      e.preventDefault();
      markdownStore.setMarkdownText(value);
      window.focus();
      return false;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  useEffect(() => {
    const currentMarkdownBlock = markdownStore.currentMarkdownBlock;
    if (currentMarkdownBlock) {
      setValue((value) => value.concat(currentMarkdownBlock.value));
    }

    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current!.focus();
    }
  }, [markdownStore.currentMarkdownBlock]);

  return (
    <div className={classes.textAreaWrapper}>
      <textarea
        ref={textAreaRef}
        onKeyDown={handleSave}
        onChange={handleChange}
        value={value}
        className={classes.textArea}></textarea>
    </div>
  );
});
