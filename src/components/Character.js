import React, {useState, useMemo } from 'react';
import "./Character.css"
import "./SceneOne.css"
import "./SceneTwo.css"
import NextImage from "../assets/next_button.png"

function Character(input){
  const props = input.props

  const [dialogCounter, setCounter] = useState(0)
  const [show, setShow] = useState(false);

  const incrementDialogue = (e) => {
    e.stopPropagation()
    setCounter(dialogCounter+1)
  }

  const dialogs = useMemo(()=> props.dialogs,[props.dialogs])

  const currentDialog = dialogs[dialogCounter]

  const handleClose = async (e) => {
    e.stopPropagation()
    setShow(false);
    await new Promise(r => setTimeout(r, 200));
    setCounter(0)
  };

  const handleShow = () => setShow(true);

  return(
    <div>
      <img src={props.image} className={`character ${props.name}`} alt="character" onClick={handleShow}/>
      {
        show ?
        (
          <div className="customModal" onClick={handleClose}>
          <center>
          <img src={currentDialog} className="sceneOneDialog" alt="dialog"></img>
            {
              (dialogCounter !== props.dialogs.length-1) ?
              (
                  <>
                  <span></span>
                  <br></br>
                  <img src={NextImage} className="nextButton" onClick={incrementDialogue} alt="nextButton"></img>
                  </>
              ) : (
                <>
                </>
              )
            }
          </center>
        </div>
        ) :
          <>
          </>
      }
    </div>
  )
}

export default Character