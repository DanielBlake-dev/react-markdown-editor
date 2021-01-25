import React from "react";

import Grid from "@material-ui/core/Grid";
import { Preview, Editor } from "../index";
import { CoreContextProvider } from "./CoreContextProvider";

export const Core = () => {
  return (
    <CoreContextProvider>
      <Grid container xl={12}>
        <Grid item xl={6}>
          <Editor />
        </Grid>
        <Grid item xl={6}>
          <Preview />
        </Grid>
      </Grid>
    </CoreContextProvider>
  );
};
