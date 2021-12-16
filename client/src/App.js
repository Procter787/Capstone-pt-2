// import React, { useState, useEffect } from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

import { Routes, Route } from "react-router-dom"
// import { BrowserRouter as Router } from "react-router-dom"
import HomePage from "./home/homePage";
import Header from './header/header';
import BearRiverPage from './rivers/Bear-River/bearRiverPage'
import LoganRiverPage from './rivers/Logan-River/loganRiverPage'
import GreenRiverPage from './rivers/Green-River/greenRiverPage'
import ProvoRiverPage from './rivers/Provo-River/provoRiverPage'
import WeberRiverPage from './rivers/Weber-River/weberRiverPage'
import AboutPage from './components/about/AboutPage';


// import { getPosts } from './actions/posts'
// import Posts from './components/Posts/Posts'
// import Form from './components/Form/Form';
// import memories from './Images/browntrout.jpg'
// import useStyles from './styles'


const App = () => {
    // const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    // const dispatch = useDispatch();
    // // const Routes = useRoutes();

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch]);

    return (
        <>
        <div className="container-fluid">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/Bear-River" element={<BearRiverPage />}></Route>
          <Route path="/Green-River" element={<GreenRiverPage />}></Route>
          <Route path="/Logan-River" element={<LoganRiverPage />}></Route>
          <Route path="/Provo-River" element={<ProvoRiverPage />}></Route>
          <Route path="/Weber-River" element={<WeberRiverPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>


        {/* <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Fly Utah</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container> */}
        </>
    )
}


export default App;