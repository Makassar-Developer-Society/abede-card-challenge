import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Biodata = () => {
  return (
    <div>
      <Grid item xs>
        <Typography gutterBottom variant="subtitle1">
          <strong>Biodata</strong>
        </Typography>
        <Typography variant="body2" gutterBottom color="textSecondary">
          Nama : Abd Rahman
        </Typography>
        <Typography variant="body2" gutterBottom color="textSecondary">
          Favorit Bahasa Pemrograman : HTML,CSS,JAVASCRIPT
        </Typography>
        <Typography variant="body2" gutterBottom color="textSecondary">
          Status : Mahasiswa
        </Typography>
      </Grid>
    </div>
  );
};

export default Biodata;
