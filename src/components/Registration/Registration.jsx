import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    REGISTRATION_REQUESTED
} from '../../constans/action-types'


const Registration = ( {
        show,
        onHide,
        handleShow,
        registration
    }) => { 
    const [data, setData] = useState({email: "", password: "", fullName: "", gender: "", phone: "", address:""});
    
    const handleChange = (event) => {
        setData({ 
            ...data, [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        registration(data)
    }
    
    return(
    <>
        <Modal style={styles.modal} show={show} onHide={onHide}>
            <Modal.Body style={styles.modalBody}>
                <Modal.Title className="box-header with-border">
                    <h3 style={{color:'#FFFFFF'}}>REGISTRATION</h3>
                </Modal.Title>
                <Form method="post" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
						<Form.Control type="email" bsPrefix style={styles.inputan} className="inputan" name="email" value={data ? data.email:""} onChange={handleChange} placeholder="Email" required/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" bsPrefix style={styles.inputan} name="password" value={data ? data.password:""} onChange={handleChange} placeholder="Password" required/>
					</Form.Group>
					<Form.Group controlId="formBasicText">
						<Form.Control type="text" bsPrefix style={styles.inputan} name="fullName" value={data ? data.fullName:""} onChange={handleChange} placeholder="Full Name" required/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Control as="select" bsPrefix style={styles.inputan} value={data ? data.gender:""} onChange={handleChange} name="gender" required>
							<option value="Male">Male</option>
							<option value="Famale">Famale</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="formBasicText">
						<Form.Control type="text" bsPrefix style={styles.inputan} name="phone" value={data ? data.phone:""} onChange={handleChange} placeholder="phone" required/>
					</Form.Group>
					<Form.Group controlId="formBasicText">
						<Form.Control type="text" bsPrefix style={styles.inputan} name="address" value={data ? data.address:""} onChange={handleChange} placeholder="address" required/>
					</Form.Group>
                    <Button type="submit" variant="danger" style={styles.Btn} className="btn btn-user">Registration</Button>
                </Form>
                <p style={styles.textFooter}>Already have an account ? click <b onClick={() => handleShow(false)}>Hare</b><span></span></p>
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
       height:500, 
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


Registration.propTypes = {
    registration: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    registration: state.registration
})
  
const mapDispatchToProps = (dispatch) => ({
    registration: (data) => dispatch({type: REGISTRATION_REQUESTED, payload: {data}})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Registration)