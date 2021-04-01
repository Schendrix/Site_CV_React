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
Typography,
List,
ListSubheader,
ListItem,
ListItemText
} from '@material-ui/core'
import Navbar from './Navbar';
import Donut from 'react-svg-donuts';

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
    },
    marginb:{
        marginBottom:"100px",   
        display:"flex",
        marginLeft:"45%"
    },
    style1:{
        //left:"50%",
        textAlign:"center",
        marginBottom:"50px"
    },

});


const renderProgress = progress => <strong >{progress}%</strong>;



const Hobbies = () => {

    const classes= useStyles();

    return (
       <>
        <Navbar />
       <Box component="div" className={classes.mainContainer} display="block">
             <Box className={classes.marginb}>
             
        <Donut progress={30} onRender={renderProgress} />
                <ListItemText>
                    <h1>Back-End</h1>
                </ListItemText>
                
            </Box>
            <Typography className={classes.style1}>
            <List>
                <ListItemText>
                    -Node.js
                </ListItemText>
                <ListItemText>
                    -SQL
                </ListItemText>
            </List>
            </Typography>
            <Box className={classes.marginb}>
             
             <Donut progress={50} onRender={renderProgress} />
                     <ListItemText>
                         <h1>Front-End</h1>
                     </ListItemText>
                 </Box>
                 <Typography className={classes.style1}>
            <List>
                <ListItemText>
                    -Node.js
                </ListItemText>
                <ListItemText>
                    -SQL
                </ListItemText>
            </List>
            </Typography>
                 <Box className={classes.marginb}>
             
             <Donut progress={20} onRender={renderProgress} />
                     <ListItemText>
                         <h1>Scripting</h1>
                     </ListItemText>
                 </Box>
        </Box>
        </>
    );
};

export default Hobbies;
