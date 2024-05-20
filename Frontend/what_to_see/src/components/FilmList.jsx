import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../services/sanity/api';
import {get_movies_list} from "../services/movies_api/movies"

   const FilmList = () => {
     const [films, setFilms] = useState([]);

     useEffect(() => {
      get_movies_list().then(data => setFilms(data));
     }, []);

     return (
       <div>
         <h1>Films</h1>
         <ul>
           {films.map(film => (
             <li key={film._id}>{film.titleText.text}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default FilmList;
