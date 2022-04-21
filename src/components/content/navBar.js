import { Button } from "@material-ui/core";
import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="TopArea">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "0vh",
                    padding: "3%"
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
                    <a className="underLine2" href="/">
                        <Button variant="outlined" color="primary">
                            CONTACT
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default NavBar;