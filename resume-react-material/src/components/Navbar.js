import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {Link} from 'react-router-dom';
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
Icon,
Button
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from "@material-ui/icons";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import avatar from "../avatar.png";
import GetAppIcon from '@material-ui/icons/GetApp';
import GitUser from "../containers/GitUser";
import Footer from "./Footer";
import MyPDF from '../Fisiere/Resume.pdf';

// CSS Styles
const useSyles = makeStyles(theme=>({
    menuSliderContainer:{
       width:250,
       background: "#2D1E2F",
       height: "100%" 
    },
    avatar:{
        display: "block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "#FCF6B1"
    },
    downloadStyle:{
        //left:"50%",
        textAlign:"center",
        display:"flex",
        marginLeft:"45%"
    },
    downloadStyle1:{
        //left:"50%",
        textAlign:"center",
        display:"flex",
        marginLeft:"25%",
    },
}));

const menuItems=[
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/portofolio"
    },
    {
        listIcon: <EqualizerIcon/>,
        listText: "Stats",
        listPath: "/hobbies"
    }
]


 const Navbar = () => {
     const [state, setState] = useState({
         right: false
     })

const toggleSlider = (slider, open) => () =>{
    setState({...state,[slider]:open});
};


    const classes = useSyles();

    const sideList = slider =>(
        <>
        <Box
        //onClick={toggleSlider(slider,false)}
        className={classes.menuSliderContainer} component="div">
             <GitUser/> 
            <Divider />
            <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem} >{lsItem.listIcon}</ListItemIcon>
                     <ListItemText className={classes.listItem} primary={lsItem.listText}>

                     </ListItemText>
                    
                </ListItem>
                ))}
                
            </List>
            
        </Box>
        
        </>
    )

    return (
        
        
        <Box component="nav">
            <AppBar position="static" style={ {background:"#5F506B"} } >
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)} style={{color:"#6A6B83"}}>
                        <ArrowBack style={{color: "#76949F" }}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"#A9E5BB"}}>
                        Menu
                    </Typography>
                    <MobilRightMenuSlider 
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider("right",false)}
                    >
                        {sideList("right")}
                        <div backgroundColor="tomato">
        <div className={classes.downloadStyle}>
        <Icon ><GetAppIcon /></Icon>
        </div>
        <div className={classes.downloadStyle1}>
        <Button href={MyPDF} download="Resume.pdf" > Download CV </Button>
        </div>
        </div>
                    <Footer/>
                    </MobilRightMenuSlider>
                    
                </Toolbar>
            </AppBar>
           
        </Box>
        
    )
        
}

export default Navbar;