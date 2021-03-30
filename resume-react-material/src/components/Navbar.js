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
Box
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from "@material-ui/icons";
import avatar from "../avatar.png"

// CSS Styles
const useSyles = makeStyles(theme=>({
    menuSliderContainer:{
       width:250,
       background: "#511",
       height: "100%" 
    },
    avatar:{
        display: "block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
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
        listText: "Portofolio",
        listPath: "/portofolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
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
        <Box
        onClick={toggleSlider(slider,false)}
        className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe"/>
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
    )

    return (
        
        
        <Box component="nav">
            <AppBar position="static" style={ {background:"#222"} } >
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)} style={{color:"tomato"}}>
                        <ArrowBack style={{color: "tomato" }}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portofolio
                    </Typography>
                    <MobilRightMenuSlider 
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider("right",false)}
                    >
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        
    )
        
}

export default Navbar;