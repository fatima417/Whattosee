import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import FilmList from './components/FilmList';

   const App = () => {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<FilmList />} />
         </Routes>
       </Router>
     );
   };

   export default App;
