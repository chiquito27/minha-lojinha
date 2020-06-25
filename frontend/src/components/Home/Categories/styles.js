import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  iconLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
    marginBottom: "8px",
    marginTop: "8px",
  },
  rootDiv: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-around",
  },
}));
