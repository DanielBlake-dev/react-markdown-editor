import React, { useState } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import {
  getHeadlines,
  getHeadline,
  Headline,
  HeadlineType,
} from "../../settings/blockTypes";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { useMarkdownStore } from "../../hooks/useMarkdownStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    headlines: {
      paddingRight: theme.spacing(2),
    },
  })
);

const headlines = getHeadlines();

export const EditorHeadline = () => {
  const classes = useStyles();
  const markdownStore = useMarkdownStore();

  const [selectedHeadline, setSelectedHeadline] = useState<Headline>(
    getHeadline("h1")
  );

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as HeadlineType;
    setSelectedHeadline(getHeadline(value));
    markdownStore.setCurrentMarkdownBlock(value);
  };

  return (
    <div className={classes.headlines}>
      <Select
        classes={{ root: classes.root }}
        variant='outlined'
        value={selectedHeadline.value}
        onChange={onSelectChange}
        labelId='headline-toolbar-select-label'
        id='headline-toolbar-select'>
        {headlines.map((hl) => (
          <MenuItem key={hl.value} value={hl.value}>
            {hl.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
