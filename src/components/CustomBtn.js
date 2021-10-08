import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';   

const StyledButton = withStyles({ //Konstante/Variable die Stylelemente (CSS) durch den Import withStyles hat/ausgeben lassen kann
    root: { //Klassenname -> root (kann alles sein) -> enthält die folgenden Styleelemente
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4f25f7"
          },
    },
    label: {
      textTransform: 'capitalize', //Caps schreiben
    },
  })(Button);  //Um zu signalisieren, dass es ein Button sein soll -> sonst wüsste er es nicht

function CustomBtn(props) { //CustomBtn hat ein Argument props, das wird dann übergeben in App.js
    return ( 
        <StyledButton variant="contained">{props.txt}</StyledButton>
     );
}

export default CustomBtn;