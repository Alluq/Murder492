import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PhoneBase from "../assets/phone_app_assets/phone_screen_with_phone.png"
import CrimebotAppIcon from "../assets/phone_app_assets/crimebot_app_icon.png"
import CrimeSketchIcon from "../assets/phone_app_assets/crimesketch_app_icon.png"
import "./Phone.css"

function Phone(props){
  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <img src={PhoneBase} className={"phone"} alt="phone" onClick={handleShow}/>
      <img src={CrimebotAppIcon} className={"phone"} alt="phone" onClick={handleShow}/>
      {/* <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Phone Screen</Modal.Title>
        </Modal.Header>
        <Modal.Body>What are we trynna do here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Phone
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  )
}

export default Phone