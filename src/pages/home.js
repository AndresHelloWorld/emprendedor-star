import React from 'react';
import { Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import Carou from '../components/content/carousel'
import autoBind from "auto-bind";
import Box from '../components/Box'
import '../CSS/style.css'
import '../CSS/NavBar.css'
import app from '../firebase'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button
} from "@material-ui/core";
// import '../firebase'
// import firestore from 'firebase/firestore';
// import { doc, getDocFromCache } from 'firebase/firestore';
const Home = () => {
    return (
        <div>
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
                            <Link to="/products" id="linkProd">
                                Ver más Productos
                            </Link>
                            {/* <Link to="/products">Ver más Productos</Link> */}
                        </div>
                    </div>
                    <div style={{ padding: "2%" }} data-aos="zoom-in-up">
                        <video
                            className="Vid"
                            poster="https://firebasestorage.googleapis.com/v0/b/andresab-1c58c.appspot.com/o/cajon.jfif?alt=media&token=32cff1dc-f0cb-4f09-ab60-fd84c420b3a7"
                        ></video>
                    </div>
                </div>
                <Carou />
            </Box>

        </div>

    )
}
// function Banner(props) {
//     if (props.newProp) console.log(props.newProp);
//     const contentPosition = props.contentPosition
//         ? props.contentPosition
//         : "left";
//     const totalItems = props.length ? props.length : 3;
//     const mediaLength = totalItems - 1;

//     let items = [];
//     const content = (
//         <Grid item xs={12 / totalItems} key="content">
//             <CardContent className="Content">
//                 <Typography className="Title">{props.item.Name}</Typography>

//                 <Typography className="Caption">{props.item.Caption}</Typography>

//                 <Button variant="outlined" className="ViewButton">
//                     View Now
//                 </Button>
//             </CardContent>
//         </Grid>
//     );

//     for (let i = 0; i < mediaLength; i++) {
//         const item = props.item.Items[i];

//         const media = (
//             <Grid item xs={12 / totalItems} key={item.Name}>
//                 <CardMedia className="Media" image={item.Image} title={item.Name}>
//                     <Typography className="MediaCaption">{item.Name}</Typography>
//                 </CardMedia>
//             </Grid>
//         );

//         items.push(media);
//     }

//     if (contentPosition === "left") {
//         items.unshift(content);
//     } else if (contentPosition === "right") {
//         items.push(content);
//     } else if (contentPosition === "middle") {
//         items.splice(items.length / 2, 0, content);
//     }

//     return (
//         <Card raised className="Banner">
//             <Grid container spacing={0} className="BannerGrid">
//                 {items}
//             </Grid>
//         </Card>
//     );
// }

// const items = [
//     {
//         Name: "Pizza begin",
//         Image: "https://source.unsplash.com/featured/?macbook",
//         contentPosition: "left",
//         Items: [
//             {
//                 Name: "Macbook Pro",
//                 Image: "https://source.unsplash.com/featured/?macbook"
//             },
//             {
//                 Name: "iPhone",
//                 Image: "https://source.unsplash.com/featured/?iphone"
//             }
//         ]
//     },
//     {
//         Name: "Home Appliances",
//         Caption: "Say no to manual home labour!",
//         contentPosition: "middle",
//         Items: [
//             {
//                 Name: "Washing Machine WX9102",
//                 Image: "https://source.unsplash.com/featured/?washingmachine"
//             },
//             {
//                 Name: "Learus Vacuum Cleaner",
//                 Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
//             }
//         ]
//     },
//     {
//         Name: "Decoratives",
//         Caption: "Give style and color to your living room!",
//         contentPosition: "right",
//         Items: [
//             {
//                 Name: "Living Room Lamp",
//                 Image: "https://source.unsplash.com/featured/?lamp"
//             },
//             {
//                 Name: "Floral Vase",
//                 Image: "https://source.unsplash.com/featured/?vase"
//             }
//         ]
//     }
// ];

// class Home extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             autoPlay: true,
//             animation: "fade",
//             indicators: true,
//             timeout: 500,
//             navButtonsAlwaysVisible: false,
//             navButtonsAlwaysInvisible: false,
//             cycleNavigation: true
//         };

//         autoBind(this);
//     }

//     toggleAutoPlay() {
//         this.setState({
//             autoPlay: !this.state.autoPlay
//         });
//     }

//     toggleIndicators() {
//         this.setState({
//             indicators: !this.state.indicators
//         });
//     }

//     toggleNavButtonsAlwaysVisible() {
//         this.setState({
//             navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
//         });
//     }

//     toggleNavButtonsAlwaysInvisible() {
//         this.setState({
//             navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
//         });
//     }

//     toggleCycleNavigation() {
//         this.setState({
//             cycleNavigation: !this.state.cycleNavigation
//         });
//     }

//     changeAnimation(event) {
//         this.setState({
//             animation: event.target.value
//         });
//     }

//     changeTimeout(event, value) {
//         this.setState({
//             timeout: value
//         });
//     }

//     render() {
//         return (
//             <Box>
//                 <div style={{ marginTop: "50px", color: "#494949" }}>
//                     <h2>3 Items layout - StackOverflow - Yotam</h2>

//                     <Carousel
//                         className="Example"
//                         autoPlay={this.state.autoPlay}
//                         animation={this.state.animation}
//                         indicators={this.state.indicators}
//                         timeout={this.state.timeout}
//                         cycleNavigation={this.state.cycleNavigation}
//                         navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
//                         navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}

//                     // fullHeightHover={false}
//                     // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
//                     // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
//                     // indicatorContainerProps={{style: {margin: "20px"}}}
//                     // NextIcon='next'
//                     >
//                         {items.map((item, index) => {
//                             return (
//                                 <Banner
//                                     item={item}
//                                     key={index}
//                                     contentPosition={item.contentPosition}
//                                 />
//                             );
//                         })}
//                     </Carousel>
//                 </div>
//                 <Link to="/products">Productos</Link>
//                 <Link to="/services">Servicios</Link>
//             </Box>

//         );
//     }
// }

export default Home;