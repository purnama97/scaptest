// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ShareMovie.css';
// import { Form, Row, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
// import env from "react-dotenv";
// import axios from 'axios';

// const ShareMovie = () => {

//     const [data, setData] = useState({});

//     const handleChange = (event) => {
//         setData({
//            ...data, [event.target.name]: event.target.value
//         })
//     }
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let idVideo = data.linkFilm.split("=");
//         //https://www.googleapis.com/youtube/v3/videos?id=Rlbh0giYWjU&key=AIzaSyBpx8Uas1xu9dNq38EaUvl5EttNErSQvXc&part=snippet,contentDetails,statistics,status
//         axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${idVideo[1]}&key=${env.REACT_APP_YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status`)
//         .then(function (response) {
//             // handle success
//             console.log(response.data.items[0]);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .then(function () {
//             // always executed
//         });

//         setData({})
//     }
//     return (
//         <>
//         <div className="Share">
//         <p className="title">Share a Youtube Movie</p>
//         <Form method="POST" onSubmit={handleSubmit}>
//             <Form.Group as={Row} controlId="formBasicEmail">
//                 <Col sm="10">
//                     <Form.Control type="text" name="linkFilm" value={data ? data.linkFilm:""} onChange={handleChange} placeholder="Link Video Youtube" />
//                 </Col>
//                 <Col sm="2">
//                 <Button className="button" variant={'outline-danger'} type="submit">
//                     <FontAwesomeIcon icon={faShareAlt} /> Share
//                 </Button>
//                 </Col>
//             </Form.Group>
//         </Form>
//         </div>
//         </>
//     )

// }

// export default  ShareMovie;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShareMovie.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    POST_MOVIE_REQUESTED
} from '../../constans/action-types'

const ShareMovie = ({
    postMovie
}) => {
    const [data, setData] = useState({});

    const handleChange = (event) => {
        setData({
           ...data, [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const idVideo = data.linkFilm.split("v=");
        postMovie(idVideo[1])
    }
    return (
        <>
        <div className="Share">
        <p className="title">Share a Youtube Movie</p>
        <Form method="POST" onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formBasicEmail">
                <Col sm="10">
                    <Form.Control type="text" name="linkFilm" value={data ? data.linkFilm:""} onChange={handleChange} placeholder="Link Video Youtube" />
                </Col>
                <Col sm="2">
                <Button className="button" variant={'outline-danger'} type="submit">
                    <FontAwesomeIcon icon={faShareAlt} /> Share
                </Button>
                </Col>
            </Form.Group>
        </Form>
        </div>
        </>
    )

}

ShareMovie.propTypes = {
    postMovie: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    movie: state.movie
})
  
const mapDispatchToProps = (dispatch) => ({
    postMovie: (idVideo) => dispatch({type: POST_MOVIE_REQUESTED, payload: {idVideo}})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ShareMovie)