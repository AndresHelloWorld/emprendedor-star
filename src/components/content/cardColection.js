import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({

  root2: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 300,
  },
  
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item spacing={999}>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={props.item.urlImage}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {props.item.descrip}
                    </Typography>
                    <h3>
                      {props.item.price}
                    </h3>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Detallers
                  </Button>
                </CardActions>
              </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}
