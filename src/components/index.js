import React from 'react'
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

//CSS Styles
const useStyles = makeStyles({
    particlesCanva:{
        position:"absolute",
        opacity:"0.4"
    }
})


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Header/>
            <Particles
            canvasClassName={classes.particlesCanva}
             params={{
                particles:{
                    number:{
                        value:25,
                        density:{
                            enabled: true,
                            value_area:900
                        }
                    },
                    shape:{
                        type:"square",
                        stroke:{
                            width:1
                        }
                    },
                    size:{
                        value:8,
                        random: true,
                        anim:{
                            enable: true,
                            speed:6,
                            size_min:0.1,
                            sync:true
                        }
                    },
                    opacity:{
                        value:1,
                        random:true,
                        anim:{
                            enable: true,
                            speed: 1,
                            opacity_min:0.1,
                            sync:true
                        }
                    }
                }
            }}
            />
        </>
    )
}

export default Home;
