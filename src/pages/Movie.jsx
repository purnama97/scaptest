import React, { useEffect } from 'react';
import GridMovie from '../components/GridMovie/GridMovie';
import Loading from '../components/Loading/Loading';
import Message from '../components/Message/Message';
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
            <Loading />
        ):error ? (
            <Message message={error.message} variant={'danger'} />
        ):(
            <GridMovie data={data} />
        )
        }
            
        </>
    )
}

Movie.propTypes = {
    getMovie: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie
})
  
const mapDispatchToProps = (dispatch) => ({
    getMovie: () => dispatch({ type: GET_MOVIE_REQUESTED })
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie)