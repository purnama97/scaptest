import { API } from '../../config/api';
import env from "react-dotenv";

const getYoutube = async (id) => {
  try {
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
  }catch(error) {
    console.log(error)
  }
}

const movieAction = async (action, data) => {
  switch(action) {
    case "share" :
      try {
        const dataMovie =  await getYoutube(data);

        if(!dataMovie) return {error:{message:"Movie Not Found!"}}
        let movie;
        if (localStorage.getItem('movies')===null)
        {
          movie= [];
        }else{
          movie = JSON.parse(localStorage.getItem('movies'));	
        }
        
        movie.push(dataMovie);	
        localStorage.setItem('movies',JSON.stringify(movie))
        
        return dataMovie;
      }catch (error) {
        console.log(error)    
      }
      break
      case "get" :
      try {
        const dataMovie = JSON.parse(localStorage.getItem("movies"));
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