import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmList from './components/FilmList';
import Login from './components/Login';
import Layout from './components/Layout';
import "./App.css"
import Home from './components/Home';
import Genre from './components/Genre';
import Category from './components/Categories';
import Comparison from './components/Comparison';

   const App = () => {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/home" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='genre' element={<Genre />} />
              <Route path='categories' element={<Category />} />
              <Route path='comparison' element={<Comparison/>} />
           </Route>

         </Routes>
       </Router>
     );
   };

   export default App;
