import React from 'react';
import './Content.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 420,
  },
  content: {
    height: 220,
  },
  media: {
    height: 140,
  },
});

const Content = (props) => {
    const classes = useStyles();
    const {title,body,id} = props.post;
    // console.log(props.post);
    return (
        <div className="post">
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://picsum.photos/300/200"
                            title="Contemplative Reptile"/>
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                <CardActions alignItems='flex-end'>

                <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                    
                   <Button variant="outlined"><Link to={"/posts/"+id}>Read More</Link></Button>
                </Grid>
                </CardActions>
                </Card>    
        </div>
    );
};

export default Content;