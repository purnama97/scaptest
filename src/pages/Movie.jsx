import React, { useEffect } from 'react';
import GridMovie from '../components/GridMovie/GridMovie';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    GET_MOVIE_REQUESTED
} from '../constans/action-types'

const Movie = ({
    getMovie,
    movie:{data, loading, error}
}) => {

    useEffect(() => {
        getMovie()
    },[getMovie]);

    return (
        <>
        {loading ? (
            <>Loading ..</>
        ):(
            <GridMovie data={data} />
        )
        }
            
        </>
    )
}

Movie.propTypes = {
    getMovie: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie
})
  
const mapDispatchToProps = (dispatch) => ({
    getMovie: () => dispatch({ type: GET_MOVIE_REQUESTED })
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie)