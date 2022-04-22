import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { green, purple, blue } from '@material-ui/core/colors';
import React from 'react';
import { Link } from 'react-router-dom'
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[600]),
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
  }))(Button);
const NavBar = () => {
    return (
        <div className="TopArea">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "0vh",
                    padding: "3%",
                    backgroundColor: "#bbe5e5"
                }}
            >
                <div style={{ marginLeft: "2vw" }}>
                    <strong style={{ fontSize: "1.8rem" }}>Emprendedor Star</strong>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                    }}
                >
                    <a className="underLine2 hide_on_responsive" href="/">
                        <Button variant="text" color="default">
                            SERVICES
                        </Button>
                    </a>
                    <a className="underLine2 hide_on_responsive" href="/">
                        <Button variant="text" color="default">
                            CLIENTS
                        </Button>
                    </a>
                    <a className="underLine2 hide_on_responsive" href="/">
                        <Button variant="text" color="default">
                            ABOUT
                        </Button>
                    </a>
                    <a href="/">
                        <ColorButton variant="outlined" color="primary">
                            CONTACT
                        </ColorButton>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default NavBar;