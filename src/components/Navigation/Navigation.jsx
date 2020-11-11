import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigasi.css';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import PropTypes from 'prop-types';
import {
    Link
  } from "react-router-dom";

import { connect } from 'react-redux';
import {
    LOGOUT_REQUESTED
} from '../../constans/action-types';

const Navigation = ({
    auth: {data, isLogin, loading, error},
    logout
}) => {

    const [show, setShow] = useState(false);
    const [isRegis, setIsRegis] = useState('');
    
    useEffect(() => {
        if(isLogin) setShow(false)
    },[isLogin]);

    const handleClose = () => setShow(false);
    
    const handleShow = (auth) => {
        setIsRegis(auth)
        setShow(true)
    };

    const handleLogout = () => {
        logout()
    }

    return (
        <>
        <Navbar className="navbar" fixed={'top'} expand="lg">
        <Navbar.Brand><Link to="/" className="brand">Funny Movie { isLogin ? "Aku":"Kamu" }</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            {isLogin ? (
                <>
                <Navbar.Text>
                    <div  className="users">Hi, {loading ? "loading..":data.fullName}</div>
                </Navbar.Text>
                <Link to="/share" className='btn btn-md btn-danger link-white'>Share Movie</Link>
                <Button variant={'outline-danger'} onClick={handleLogout} className="btn-white">Logout</Button>
                </>
            ):(
                <>
                <Button variant={'outline-danger'} onClick={() => handleShow(false)} className="btn-white">Login</Button>
                <Button variant={'outline-danger'} onClick={()=> handleShow(true)} className="btn-red">Register</Button>
                </>
            )}
        </Navbar.Collapse>
        </Navbar>
        {isRegis ? (
            <Registration 
                show={show} 
                onHide={handleClose}
                handleShow={handleShow}    
            />
        ):(
            <Login 
                show={show} 
                onHide={handleClose}
                handleShow={handleShow}
            />
        )
        }
        </>
    )
}

Navigation.propTypes = {
    logout:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
  
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({ type: LOGOUT_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)