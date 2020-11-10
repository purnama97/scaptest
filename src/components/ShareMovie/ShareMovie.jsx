import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShareMovie.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Message from '../Message/Message';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    POST_MOVIE_REQUESTED
} from '../../constans/action-types'

const ShareMovie = ({
    postMovie,
    movie:{ data:dataShare, error, loading }
}) => {
    const [data, setData] = useState({linkFilm:""});

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
                    <Form.Control type="text" name="linkFilm" required value={data ? data.linkFilm:""} onChange={handleChange} placeholder="Link Video Youtube" />
                </Col>
                <Col sm="2">
                <Button className="button" variant={'outline-danger'} type="submit">
                    <FontAwesomeIcon icon={faShareAlt} /> Share
                </Button>
                </Col>
            </Form.Group>
        </Form>
        {
            loading ? (
                <>loading...</>
            ): error ? (
                <Message message={error.message} variant={'danger'}/>
            ): dataShare ? (
                <Message message={'Share Movie Success!'} variant={'success'}/>
            ): (
                null
            )
        }
        </div>
        </>
    )

}

ShareMovie.propTypes = {
    postMovie: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie
})
  
const mapDispatchToProps = (dispatch) => ({
    postMovie: (idVideo) => dispatch({type: POST_MOVIE_REQUESTED, payload: {idVideo}})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ShareMovie)