// import { API } from '../../config/api';
// import env from "react-dotenv";

// const getYoutube = async (id) => {
//   try {
//   const {
//     data: dataMovie
//   } = await API.get(`videos?id=${id}&key=${env.REACT_APP_YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status`)

//   const data = {
//       id: dataMovie.items[0].id,
//       title: dataMovie.items[0].snippet.localized.title,
//       description: dataMovie.items[0].snippet.localized.description,
//       publishedAt:dataMovie.items[0].snippet.publishedAt,
//       statistics: dataMovie.items[0].statistics,
//   }
//     return data;
//   }catch(error) {
//     console.log(error)
//   }
// }

// const movieAction = async (action, data) => {
//   switch(action) {
//     case "share" :
//       try {
//         const dataMovie =  await getYoutube(data);

//         if(!dataMovie) return {error:{message:"Movie Not Found!"}}
//         let movie;
//         if (localStorage.getItem('movies')===null)
//         {
//           movie= [];
//         }else{
//           movie = JSON.parse(localStorage.getItem('movies'));	
//         }
        
//         movie.push(dataMovie);	
//         localStorage.setItem('movies',JSON.stringify(movie))
        
//         return dataMovie;
//       }catch (error) {
//         console.log(error)    
//       }
//       break
//       case "get" :
//       try {
//         const dataMovie = JSON.parse(localStorage.getItem("movies"));
//         return dataMovie;
//       }catch (error) {
//         console.log(error)    
//       }
//     break
//     default:
//       console.log("hallo world")
//   }
// }

// export default movieAction;



import { API, setAuthToken } from '../../config/api';
import env from "react-dotenv";

const movieAction = async (action, data) => {
  switch(action) {
    case "share" :
      
      console.log(data)
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
          // setAuthToken(env.REACT_APP_OAUTH2_TOKEN)
          setAuthToken('ya29.A0AfH6SMAiswewdu_9415nC5EdkW_XCYChVi5PaU0LgFdcdnxIOeUMWIQ8kfmAloMhR7mJjk3MSl7mSlKHer8tQMpphuSJ1KWazxvaNzOvfCoj37wA-4HebwklnUx7ZbsW4Hju7LT2AWXregCUOGjk6GVImIFTeuhJcMJsC330Phk')
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
        } = await API.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${env.REACT_APP_PLAYLIS_ID}&key=${env.REACT_APP_YOUTUBE_KEY}&part=snippet,contentDetails,status`)      
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