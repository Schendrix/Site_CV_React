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
import project1 from "../images/pi.png";
import project2 from "../images/SiSC.png";
import project3 from "../images/react1.png";
//CSS Styles
const useStyles = makeStyles({
    mainContainer:{
        background:"#2D1E2F",
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
                        height="180"
                        image={project1}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                RaspberryPi Project
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            At the moment, I'm working on how to optimize my server structure because I want to deploy it online and it should as secure as possible,
                            plus I want to deploy my projects there and it should render my apps without any problem.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions backgroundcolor="pink">
                            <Button size="small" color="primary" >
                                Link
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
                        alt="Project 2"
                        height="135"
                        image={project2}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                SiSC Projects
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            As a member, or a leader for the IT division, SiSC has offered me the opportunity to develop my hard skills as well as the soft skills within a team where we were responsible
                            with the Back-End implementations for the following projects I've taken part like Tap That Job, Dare to Speak, ITFest and Spring IT.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://sisc.ro/">
                                Link
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
                        height="180"
                        image={project3}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                React Project
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This very page is made in react and material-ui and on the near future I'll integrate more API's and deploy it on my server.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="/">
                                Link
                            </Button>
                            
                        </CardActions>
                </Card>

                
                </Grid>
                 
                 
            </Grid>
        </Box>
       
    );
};

export default Portofolio;
