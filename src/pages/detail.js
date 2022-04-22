import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Toolbar, List, IconButton, Typography, Slide, Dialog, Avatar, Icon, AppBar, Grid } from "@material-ui/core/";
import Box from '../components/Box'
import '../CSS/style.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CloseIcon from "@material-ui/icons/Close";
import GridProfile from '../components/content/gridProfile'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    appBar: {
        background: '#54d1d1',
        position: "relative"
    },
    title: {
        marginLeft: theme.spacing(90),
        fontSize: 35,
        flex: 1
    },
    subTitle: {
        marginTop: 50,
    },
    userName: {
        marginTop: 30,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Detail(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    return (
        <div>
            <Dialog
                fullScreen
                open={props.open}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={props.close}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {props.data.name}
                        </Typography>

                    </Toolbar>
                </AppBar>
                <List>
                    <Box>
                        <div className={classes.root}>
                            <Avatar alt={props.data.user} src={props.data.urlImage} className={classes.large} />
                            <Typography className={classes.userName} gutterBottom variant="h4" component="h1">
                                {props.data.user}
                            </Typography>
                        </div>
                        <Grid container spacing={1}>

                            <Grid xs={6} className="grid">
                                <Typography className={classes.subTitle} gutterBottom variant="h5" component="h2">
                                    Experiencia
                                </Typography>
                                <Typography>
                                    {props.data.experience}
                                </Typography>
                            </Grid>
                            <Grid xs={6} className="grid">
                                <Typography className={classes.subTitle} gutterBottom variant="h5" component="h2">
                                    Descripción
                                </Typography>
                                <Typography>
                                    {props.data.description}
                                </Typography>
                            </Grid>
                            <Grid xs={6} className="grid">
                                <Typography className={classes.subTitle} gutterBottom variant="h5" component="h2">
                                    Habilidades
                                </Typography>
                                <Typography>
                                    {props.data.skill}
                                </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography gutterBottom className={classes.subTitle} variant="h5" component="h2">

                                    <a target="_blank" href={`https://api.whatsapp.com/send?phone=+57${props.data.contact}`} className='css-button-3d--blue'>Contacto <WhatsAppIcon style={{ fontSize: 30 }} /> </a>
                                </Typography>
                            </Grid>
                            <Grid xs={12} className="grid">
                                <Typography gutterBottom className={classes.subTitle} variant="h5" component="h2">
                                    Galeria
                                </Typography>
                                <GridProfile item={props.data} />
                            </Grid>
                        </Grid>
                    </Box>
                </List>
            </Dialog>
        </div>
    );
}
