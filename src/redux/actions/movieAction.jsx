import { API } from '../../config/api';
import env from "react-dotenv";

const getYoutube = async (id) => {
  const {
    data: dataMovie
  } = await API.get(`videos?id=${id}&key=${env.REACT_APP_YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status`)

  const data = {
      id: dataMovie.items[0].id,
      title: dataMovie.items[0].snippet.localized.title,
      description: dataMovie.items[0].snippet.localized.description,
      publishedAt:dataMovie.items[0].snippet.publishedAt,
      statistics: dataMovie.items[0].statistics,
  }
  return data;
}

const movieAction = async (action, data) => {
  switch(action) {
    case "share" :
      try {
        const dataMovie =  await getYoutube(data);

        let movie;
        if (localStorage.getItem('movie')===null)
        {
          movie= [];
        }else{
          movie = JSON.parse(localStorage.getItem('movie'));	
        }
        
        movie.push(dataMovie);	
        localStorage.setItem('movie',JSON.stringify(movie))
        
        return dataMovie;
      }catch (error) {
        console.log(error)    
      }
      break
      case "get" :
      try {
        const dataMovie = JSON.parse(localStorage.getItem("movie"));
        return dataMovie;
      }catch (error) {
        console.log(error)    
      }
    break
    default:
      console.log("hallo world")
  }
}

export default movieAction;