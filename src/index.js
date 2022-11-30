import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < React.StrictMode >
    <Router >
        <Header/>
        <Routes >
            <Route path = "/" exact element={ <Home/> }/> 
            <Route path = "/Apropos" element={ <Apropos/> }/> 
            <Route path = "/Logement/:logementId" element={ <Logement/> }/>
            <Route path = "*" element={ <Page404/> }/>  
        </Routes > 
    </Router> 
        <Footer/>
    </React.StrictMode >
);