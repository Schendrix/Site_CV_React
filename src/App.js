import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/";
import Resume from "./components/Resume";
import Portofolio from "./components/Portofolio";
import Hobbies from './components/Hobbies';


function App() {

  return (
<>
<CssBaseline/>
{/* <Button variant="contained" color="primary">
  This is a button
</Button>
<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
<Route exact path="/" component={Home}/>
<Route path="/resume" component={Resume}/>
<Route path="/portofolio" component={Portofolio}/>
<Route path="/hobbies" component={Hobbies}/>


</>
  );
}

export default App;
