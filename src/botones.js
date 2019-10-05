import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div>
      <IconButton color="secondary" className={classes.button} aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" className={classes.button} aria-label="add to shopping cart">
        <AddShoppingCartIcon />
        </IconButton>
    </div>
  );
}