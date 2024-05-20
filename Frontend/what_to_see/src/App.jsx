import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmList from './components/FilmList';
import Login from './components/Login';

   const App = () => {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/home" element={<FilmList />} />
         </Routes>
       </Router>
     );
   };

   export default App;
