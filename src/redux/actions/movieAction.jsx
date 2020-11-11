import { API, setAuthToken } from '../../config/api';
import env from "react-dotenv";

const movieAction = async (action, data) => {
  switch(action) {
    case "share" :
      try {
        const dataShare = {
          snippet: {
            playlistId: env.REACT_APP_PLAYLIS_ID,
            position: 0,
            resourceId: {
              kind: "youtube#video",
              videoId: data
            }
          }
        }
        
        try {
        setAuthToken(env.REACT_APP_OAUTH2_TOKEN)
         const {
            data: dataMovie
          } = await API.post('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet', dataShare)
          return dataMovie;
        } catch (error) {
          if (error.response) {
            return {error:{message:error.response.data.error.message}};
          }
        }
      }catch (error) {
        console.log(error)    
      }
      break
      case "get" :
      try {
          const {
            data: dataMovie
          } = await API.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${env.REACT_APP_PLAYLIS_ID}&key=${env.REACT_APP_API_KEY}&part=snippet,contentDetails,status`)      
          return dataMovie;
        } catch (error) {
          if (error.response) {
            console.log(error.response)
            return {error:{message:error.response.data.error.message}};
          }
      }
    break
    default:
      console.log("hallo world")
  }
}

export default movieAction;