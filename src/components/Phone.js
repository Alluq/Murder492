import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PhoneBase from "../assets/PhoneBase.png"
import "./Phone.css"

function Phone(props){
  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <img src={PhoneBase} className={"phone"} alt="phone" onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Phone Screen</Modal.Title>
        </Modal.Header>
        <Modal.Body>What are we trynna do here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Phone
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Phone