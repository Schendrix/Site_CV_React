import React from 'react'
import { makeStyles} from "@material-ui/core/styles";
import{ BottomNavigation, BottomNavigationAction, RootRef} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

//CSS Style

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minwidth:0,
            maxwidth:250
        },
        "& .MuiSvgIcon-root":{
            fill:"#FEEFDD",
            "&:hover":{
                fill:"#FAAA8D",
                fontSize:"1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background:"#4C1036"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            href="https://www.facebook.com/sendreaandrei.andrei/"
            icon={<FacebookIcon/>}
            />
        <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            href="https://github.com/Schendrix"
            icon={<GitHubIcon/>}
            />
        <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            href="https://www.linkedin.com/in/andrei-%C8%99endrea-1196a71a6/"
            icon={<LinkedInIcon/>}
            />    
            
        </BottomNavigation>
    )
}

export default Footer;
