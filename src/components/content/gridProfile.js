import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import {Typography, Card, Grid, Button, CardMedia} from "@material-ui/core/";
import '../../CSS/style.css'
import CardContent from "@material-ui/core/CardContent";
import Detail from '../../pages/detail'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 350,
        width: 450
    },
    control: {
        padding: theme.spacing(2)
    },
    media: {
        height: 450
    },
    
}));

export default function GridProfile(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                   
                    <Grid item>
                        <Card className={classes.paper}>
                            <div>
                                <CardMedia
                                    className={classes.media}
                                    image={props.item.gallery.urlImage1}
                                    title={props.item.name}
                                />
                            </div>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.paper}>
                            <div>
                                <CardMedia
                                    className={classes.media}
                                    image={props.item.gallery.urlImage2}
                                    title={props.item.name}
                                />
                            </div>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.paper}>
                            <div>
                                <CardMedia
                                    className={classes.media}
                                    image={props.item.gallery.urlImage3}
                                    title={props.item.name}
                                />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
