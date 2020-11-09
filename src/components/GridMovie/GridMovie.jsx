import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridMovie.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';
import axios from 'axios';

const GridMovie = () => {
    

    const onReady = (event) => {
        event.target.pauseVideo();
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
    };

    return (
        <>
            <Card className="Grid">
           <YouTube className="GridVideo" videoId="Vz264WxECjQ" opts={opts} onReady={onReady} />
            <Card.Body className="GridBody">
                <Card.Title className="Title">Title Movie</Card.Title>
                <Card.Link href="#" className="Thumbs"><FontAwesomeIcon icon={faThumbsUp} size="lg" /></Card.Link>
                <Card.Link href="#" className="Thumbs"><FontAwesomeIcon icon={faThumbsDown} size="lg" /></Card.Link>
                <Card.Text className="desctiption">
                <b>Description</b>
                <p>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </p>
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}

export default  GridMovie;