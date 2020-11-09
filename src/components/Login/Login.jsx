import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const Login = ( {
        show,
        onHide,
        handleShow
    }) => { 
    return(
    <>
        <Modal style={styles.modal} show={show} onHide={onHide}>
            <Modal.Body style={styles.modalBody}>
                <Modal.Title className="box-header with-border">
                    <h3 style={{color:'#FFFFFF'}}>Login</h3>
                </Modal.Title>
                <Form method="post">
                    <Form.Group controlId="formBasicEmail">
                          <Form.Control type="email" bsPrefix style={styles.inputan} name="email" placeholder="Enter email" required/>
                          {//<Form.Text className="text-muted">
                            //We'll never share your email with anyone else.
                          //</Form.Text>}
                          }
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Control type="password" bsPrefix style={styles.inputan} name="password" placeholder="Enter Password" required/>
                          {//<Form.Text className="text-muted">
                            //We'll never share your email with anyone else.
                          //</Form.Text>}onClick={() => this.props.handleLoginClick()}
                          }
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

export default Login;