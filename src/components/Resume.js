import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

//CSS Styles

const useStyles= makeStyles(theme=>({
    
    mainContainer:{
        background:"#2D1E2F"
    },
    timeLine: {
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:'""',
            position:"absolute",
            height:"100%",
            border:"1px solid tan",
            right:"40px",
            top:0
        },
        "&:after":{
            content:'""',
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2em",
            "&:before":{
                right:"calc(50% - 1px)",
                left:"auto"
            }
        }

    },
    timeLineItem:{
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"absolute"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:"10rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        
        }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        textTransform:"uppercase",
        marginRight:"5%",
        marginLeft:"5%"
    },
    subHeading:{
        color:"white",
        padding:"0",
        textTransform:"uppercase"
    }

}));


const Resume = () => {
    const classes= useStyles();
    return (
        <>
       <Navbar/>
       <Box component="header" className={classes.mainContainer}>
           <Typography variant="h4" align="center"className={classes.heading}>
               Working experience and Volunteering
           </Typography>
           <Box component="div"  className={classes.timeLine}>
               <Typography variant ="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                   2021
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        SiSC
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                            Tap That Job - Ubisoft Practice
                    </Typography>
                    <Typography variant="subtile1" aligh="center" style={{color:"tan"}}>
                        Via this experince I've learned the basiscs of React and how to use it, I gather more information about how cloud works and the devops responsabilities and how make use of API's.
                    </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                   2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        CSIE
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        Database and OOP
                    </Typography>
                    <Typography variant="subtile1" aligh="center" style={{color:"tan"}}>
                        I've learned about the concepts of OOP and what's the logical view behind the code and at Database I've learned how to structure and implement a database with well defined and structered tables.
                    
                        
                    </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                   2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        SiSC
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        IT - DevOps Team
                    </Typography>
                    <Typography variant="subtile1" aligh="center" style={{color:"tan"}}>
                        After some trainings about linux and nginx, I had been given a challenge where I had to make a script where I would run my server on a Google Cloud Virtual Machine where I had to deploy a static website and an application.
                    </Typography>
                    </Box>
                    <Typography variant ="h2" className={`${classes.timeLineItem} ${classes.timeLineYear}`}>
                   2019-2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        SiSC
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        SiSC Projects
                    </Typography>
                    <Typography variant="subtile1" aligh="center" style={{color:"tan"}}>
                        When I enrolled the SiSC ONG, I started to learn how to work inside of a team a member, how and when to make the right calls and that there's no wrong ideea.
                        After that, I began to explore more the of the leadership position and how to coordinate your team to get the best result at final of the project while you mantain
                        a friendly enviorement for your members to work.
                    </Typography>
                    </Box>
           </Box>
       </Box>
       </>
    );
};

export default Resume;
