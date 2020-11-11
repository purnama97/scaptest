import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridMovie.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';
import strcutter from '@dataak/string-cutter';
import Loading from '../Loading/Loading';

const GridMovie = ({
    data
}) => {

    const [ loadingSkeleton, setLoadingSkeleton ] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 3000);

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
            data != null ? data.items.map((x,i) => (
                <div key={i}>
                <Card className="Grid">
                <YouTube className="GridVideo" videoId={x.snippet.resourceId.videoId} opts={opts} onReady={_onReady} />
                <Card.Body className="GridBody">
                    <Card.Title className="Title">{x.snippet.title}</Card.Title>
                    <Card.Link href="#" className="Thumbs"> <FontAwesomeIcon icon={faThumbsUp} size="lg" /></Card.Link>
                    <Card.Link href="#" className="Thumbs"> <FontAwesomeIcon icon={faThumbsDown} size="lg" /></Card.Link>
                    <Card.Text className="desctiption">
                    <b>Description</b>
                    <p>
                    {strcutter(x.snippet.description,100)}
                    </p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            )):(
                <>Data Tidak ada</>
            )
        )
    )
}

export default GridMovie;