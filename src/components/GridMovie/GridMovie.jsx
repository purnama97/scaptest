import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridMovie.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    GET_MOVIE_REQUESTED
} from '../../constans/action-types'

const GridMovie = ({
    movie:{data, loading, error},
    getMovie
}) => {

    useEffect(() => {
        getMovie()
    },[getMovie]);

    console.log(error)
    console.log(loading)
    console.log(data)
   

    return (
        <>
        {/* {loading ? (
            <>Loading ..</>
        ):( */}
            halaman
            {/* data ? ( data.map((x,y) => (
            <>
            <Card className="Grid">
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${x.id}`} 
                className="GridVideo"  
                width='40%'
                height='100%'
            />
            <Card.Body className="GridBody">
                <Card.Title className="Title">{x.title}</Card.Title>
                <Card.Link href="#" className="Thumbs">{x.statistics.likeCount} <FontAwesomeIcon icon={faThumbsUp} size="lg" /></Card.Link>
                <Card.Link href="#" className="Thumbs">{x.statistics.dislikeCount} <FontAwesomeIcon icon={faThumbsDown} size="lg" /></Card.Link>
                <Card.Text className="desctiption">
                <b>Description</b>
                <p>
                {x.description}
                </p>
                </Card.Text>
            </Card.Body>
            </Card>
            </> */}
        {/* )) */}
        {/* ):(
            <> Data Tidak Ada </>
        ))
        } */}
            
        </>
    )
}

GridMovie.propTypes = {
    getMovie: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie
})
  
const mapDispatchToProps = (dispatch) => ({
    getMovie: () => dispatch({ type: GET_MOVIE_REQUESTED })
})
  
export default connect(mapStateToProps, mapDispatchToProps)(GridMovie)