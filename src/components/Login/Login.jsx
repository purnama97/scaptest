import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    LOGIN_REQUESTED
} from '../../constans/action-types'

const Login = ( {
        show,
        onHide,
        handleShow,
        login
    }) => { 
    
    const [data, setData] = useState({email:"",password:""});
    const handleChange = (event) => {
        setData({ 
            ...data, [event.target.name]: event.target.value 
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(data)
    }

    return(
    <>
        <Modal style={styles.modal} show={show} onHide={onHide}>
            <Modal.Body style={styles.modalBody}>
                <Modal.Title className="box-header with-border">
                    <h3 style={{color:'#FFFFFF'}}>Login</h3>
                </Modal.Title>
                <Form method="post" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                          <Form.Control type="email" bsPrefix style={styles.inputan} name="email" value={data ? data.email:""} onChange={handleChange} placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Control type="password" bsPrefix style={styles.inputan} name="password" value={data ? data.password:""} onChange={handleChange} placeholder="Enter Password" required/>
                    </Form.Group>
                    <Button type="submit" variant="danger" style={styles.Btn} className="btn btn-user">Login</Button>
                </Form>
                <p style={styles.textFooter}>Already have an account ? click <b onClick={() => handleShow(true)}>Hare</b><span></span></p>
            </Modal.Body>
		</Modal>
    </>
    );
}

const styles = {
    
    modal: {
        marginLeft:"40%", 
        width:416, 
        marginTop:100,
    },

    modalBody: {
       height:300, 
       backgroundColor:'#1F1F1F', 
       borderRadius:5, 
       border:'none'
    },

    Btn: {
        background:'#E50914',
        color:'#FFFFFF',
        width:'100%',
    },

    inputan:{
        background: 'rgba(210, 210, 210, 0.25)',
        border: '2px solid #D2D2D2',
        boxSizing: 'border-box',
        width:'100%',
        padding:5,
        borderRadius: 5,
        color: '#D2D2D2',
    },

    textFooter: {
        fontFamily: 'Avenir',
        fontSize: '18px',
        marginTop:30,
        lineHeight: '21px',
        color: '#B1B1B1',
    },

    Link: {
        color: '#B1B1B1',
        fontWeight:'bold',
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    login: state.auth
})
  
const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch({type: LOGIN_REQUESTED, payload: {data}})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)