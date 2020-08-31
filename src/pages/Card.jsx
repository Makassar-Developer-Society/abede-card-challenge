import React from "react";
import Image from "../component/Image";
import Biodata from "../component/Biodata";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Box } from "@material-ui/core";
import Center from "react-center";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "200px auto",
    maxWidth: 500,
  },
}));

const Card = (props) => {
  const classes = useStyles();
  return (
    <Center>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <Image />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Biodata />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Center>
  );
};

export default Card;
