import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

const Message = ({message, variant}) => {
    return (
        <>
        <Alert variant={variant}>
            { message }
        </Alert>
        </>
    )

}
  
export default Message;