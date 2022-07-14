import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #2155CD",
      borderRadius: 5,
      padding: 10,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#001E6C" : "",
      color: selected ? "white" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#001E6C",
        color: "white",
      },
      width: "23%",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
