import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const Image = () => {
  const classes = useStyles();
  return (
    <div>
      <ButtonBase className={classes.image}>
        <img
          className={classes.img}
          alt="complex"
          src="https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=700"
        />
      </ButtonBase>
    </div>
  );
};

export default Image;
