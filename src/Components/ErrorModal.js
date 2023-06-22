import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";
import { Fragment } from "react";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onErrorHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onErrorHandler}>ok</Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default ErrorModal;
