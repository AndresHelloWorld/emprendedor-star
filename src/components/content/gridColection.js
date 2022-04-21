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
        height: 450,
        width: 300
    },
    control: {
        padding: theme.spacing(2)
    },
    media: {
        height: 280
    }
}));

export default function GridColection(props) {
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={classes.paper}>
                <div>
                    <CardMedia
                        className={classes.media}
                        image={props.item.urlImage}
                        title="item"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.name}
                        </Typography>
                        <Typography
                            variant="h7"
                            color="textPrimary"
                            component="h3"
                        >
                            {props.item.user}
                        </Typography>
                        <CardActions>
                            <Button onClick={props.showDetails}>
                                Detalle
                            </Button>
                        </CardActions>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}
