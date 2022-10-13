import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  button: {
    boxShadow: "none",
    backgroundColor: "#000",
    color: "#fff",
  },

  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function CreateProduct(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.createProduct}
      >
        Crear Nuevo Producto
        <AddIcon className={classes.rightIcon}></AddIcon>
      </Button>
    </Fragment>
  );
}