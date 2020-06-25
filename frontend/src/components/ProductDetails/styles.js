import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "12px",
  },
  image: {
    borderTop: "12px",
    borderBottom: "12px",
    width: "52vmax",
    height: "30vmax",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
