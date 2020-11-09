import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigasi.css';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

const Navigasi = () => {

    const [show, setShow] = useState(false);
    const [isRegis, setIsRegis] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (auth) => {
        setIsRegis(auth)
        setShow(true)
    };

    return (
        <>
        <Navbar className="navbar" fixed={'top'} expand="lg">
        <Navbar.Brand href="#home"><span className="brand">Funny Movie</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            <Button variant={'outline-danger'} onClick={() => handleShow(false)} className="btn-white">Login</Button>
            <Button variant={'outline-danger'} onClick={()=> handleShow(true)} className="btn-red">Register</Button>
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

export default Navigasi;