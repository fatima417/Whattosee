import axios from 'axios';


export const  get_movies_list = async ()=>{
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': '2d75bc5890msheed7021ef6ddba9p130b8ejsnb63205eca8ad',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.results);
    return response.data.results
} catch (error) {
	console.error(error);
}
}