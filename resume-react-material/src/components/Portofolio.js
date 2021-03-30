import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
Box,
Grid,
Card,
CardActionArea,
CardActions,
CardContent,
CardMedia,
Button,
Typography
} from '@material-ui/core'
import Navbar from './Navbar';
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";
//CSS Styles
const useStyles = makeStyles({
    mainContainer:{
        background:"#233",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto"
    }

});

const Portofolio = () => {

    const classes = useStyles();

    return ( 
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project1}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            I would like to join Hubgets because it offers me the
                             opportunity to develop myself with the skills I will acquire 
                             via internship. And I like that, after the first glimpse, 
                             Hubgets it seems a friendly environment where you can push your 
                             limits and 
                            together with your team, you can get closer to your goals.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                LiveDemo
                            </Button>
                        </CardActions>
                </Card>

                
                </Grid>
             {/* Project 2 */}
             <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project2}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 2
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            I would like to join Hubgets because it offers me the
                             opportunity to develop myself with the skills I will acquire 
                             via internship. And I like that, after the first glimpse, 
                             Hubgets it seems a friendly environment where you can push your 
                             limits and 
                            together with your team, you can get closer to your goals.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                LiveDemo
                            </Button>
                        </CardActions>
                </Card>

                
                </Grid>

                 {/* Project 3 */}
                 <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 3"
                        height="140"
                        image={project3}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 3
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            I would like to join Hubgets because it offers me the
                             opportunity to develop myself with the skills I will acquire 
                             via internship. And I like that, after the first glimpse, 
                             Hubgets it seems a friendly environment where you can push your 
                             limits and 
                            together with your team, you can get closer to your goals.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                LiveDemo
                            </Button>
                        </CardActions>
                </Card>

                
                </Grid>
                 {/* Project 3 */}
                 <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 4"
                        height="140"
                        image={project4}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 4
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            I would like to join Hubgets because it offers me the
                             opportunity to develop myself with the skills I will acquire 
                             via internship. And I like that, after the first glimpse, 
                             Hubgets it seems a friendly environment where you can push your 
                             limits and 
                            together with your team, you can get closer to your goals.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                LiveDemo
                            </Button>
                        </CardActions>
                </Card>

                
                </Grid>
            </Grid>
        </Box>
       
    );
};

export default Portofolio;
