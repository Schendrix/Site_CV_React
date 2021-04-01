import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box} from '@material-ui/core';
import avatar from "../avatar.png";
import Typed from"react-typed";
import GitUser from "../containers/GitUser";
import GitIcon from "../containers/GitIcon";

//CSS Styles
const useStyles = makeStyles(theme =>({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color:"#72195A"
    },
    subtitle:{
        color:"#C6D8FF",
        marginBottom: "3rem"
    },
    typedContainer:{
        position: "absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

export const Header = () => {

const classes = useStyles()

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <GitIcon/>
            </Grid>
            
            <Typography className={classes.title}  variant="h4">
                <Typed strings={["Andrei Șendrea"]} typeSpeed={40}/>
            </Typography>
            <Typography className={classes.subtitle}  variant="h5">
                <Typed strings={["CSIE", "SiSC", "IT", "Back-End"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
        </Box>
    );
};

export default Header;