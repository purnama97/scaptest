import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShareMovie.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ShareMovie = ({
    
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


export default ShareMovie;