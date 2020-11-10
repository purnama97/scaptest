import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridMovie.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';
import Loading from '../Loading/Loading'

const GridMovie = ({
    data
}) => {

    const [ loadingSkeleton, setLoadingSkeleton ] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 1000);

		return () => clearTimeout(timer);
    }, []);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    return (
        loadingSkeleton ? (
            <Loading />
        ):(
            data != null ? data.map((x,i) => (
                <>
                <Card className="Grid">
                {/* <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${x.id}`} 
                    className="GridVideo"  
                    width='40%'
                    height='100%'
                /> */}
                <YouTube className="GridVideo" videoId={x.id} opts={opts} onReady={_onReady} />
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
                </>
            )):(
                <>Data Tidak ada</>
            )
        )
    )
}

export default GridMovie;