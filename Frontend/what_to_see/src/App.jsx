import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmList from './components/FilmList';
import Login from './components/Login';
import Layout from './components/Layout';
import "./App.css"
import Home from './components/Home';

   const App = () => {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/home" element={<Layout />} >
              <Route index element={<Home />} />
           </Route>

         </Routes>
       </Router>
     );
   };

   export default App;
