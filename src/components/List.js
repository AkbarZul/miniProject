import React from "react";
// import { Paper, Typography, CssBaseline } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
import "./sidebar.css";
import Logo from "../assets/logo.svg";

// const useStyle = makeStyles((theme) => ({
//   root: {
//     marginLeft: "50px",
//     width: "300px",
//     height: "30px",
//     border: '1px',
//     borderColor: 'red',
//   },
// }));
const List = () => {
//   const classes = useStyle();
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          <img src={Logo} alt="Logo" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className='product'>Product Roadmap</div>
          {/* <Paper className={classes.root}>
            <CssBaseline />
            <Typography>Todo</Typography>
          </Paper> */}
          <div className='card'>
              <span className="gruptask">
                  Grup Task 1
              </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
