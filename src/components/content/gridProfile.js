import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Detail from '../../pages/detail'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 350,
        width: 500
    },
    control: {
        padding: theme.spacing(2)
    },
    media: {
        height: 450
    }
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
                                    title="item"
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
                                    title="item"
                                />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
