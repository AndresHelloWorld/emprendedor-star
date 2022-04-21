import React from 'react';
import { Link } from 'react-router-dom'
import Carou from '../components/content/carousel'
import Box from '../components/Box'
import '../CSS/style.css'
import '../CSS/NavBar.css'
import NavBar from '../components/content/navBar'
import {
    Button
} from "@material-ui/core";
// import '../firebase'
// import firestore from 'firebase/firestore';
// import { doc, getDocFromCache } from 'firebase/firestore';
const Home = () => {
    return (
        <div>
            <NavBar />
            <Box>
                <div
                    style={{
                        display: "flex",
                        padding: "5%",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        backgroundColor: "white"
                    }}
                    className="Top_Area_Responsive"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "4vh"
                        }}
                        className="Top_Area_Text_Left_Responsive"
                    >
                        <div>Emprendedor Star</div>
                        <div
                            style={{
                                marginTop: "5vh",
                                fontSize: "50px",
                                width: "35vw",
                                cursor: "pointer"
                            }}
                        >
                            <span
                                className="underLine"
                                style={{
                                    fontFamily: " 'Ubuntu', sans-serif",
                                    fontWeight: "bolder"
                                }}
                            >
                                Emprende con nosotros
                            </span>{" "}
                            <br />{" "}
                            <span
                                className="underLine1 Responsive_Head"
                                style={{
                                    fontFamily: "'Roboto Mono', monospace",
                                    fontWeight: "100"
                                }}
                            >
                                Espacio para crecer

                            </span>
                        </div>
                        <div style={{ marginTop: "10vh" }} className="Responsive_Head">
                            <Link to="/services" id="linkProd">
                                Ver más servicios
                            </Link>
                        </div>
                    </div>
                    <div style={{ padding: "2%" }} data-aos="zoom-in-up">
                        <video
                            className="Vid"
                            poster='https://firebasestorage.googleapis.com/v0/b/andresab-1c58c.appspot.com/o/gato.jpg?alt=media&token=9edfc019-284f-4aa4-afd7-d6090324347f'
                        ></video>
                    </div>
                </div>
                <Carou />
            </Box>

        </div>

    )
}
export default Home;