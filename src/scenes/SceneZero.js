import DialogOne from "../assets/scene0_assets/scene0_1.png"
import DialogTwo from "../assets/scene0_assets/scene0_2.png"
import DialogThree from "../assets/scene0_assets/scene0_3.png"
import DialogFour from "../assets/scene0_assets/scene0_4.png"
import DialogFive from "../assets/scene0_assets/scene0_5.png"
import Background from "../assets/scene0_assets/scene0.png"
import NextImage from "../assets/scene0_assets/next_button.png"
import "../components/SceneZero.css"
import { useContext, useState, useRef, useEffect, useMemo } from "react"
import { sceneContext } from "../context/SceneProvider"

function SceneZero(props){

  const [dialogCounter, setDialogCounter] = useState(1)

  const [sceneCounter, setSceneCounter] = useContext(sceneContext)

  const incrementDialogue = () => {
    setDialogCounter(dialogCounter+1)
    console.log(dialogCounter)
    if(dialogCounter === 5){
      setSceneCounter(sceneCounter+1)
    }
  }

  const dialogues = useMemo(() => [DialogOne, DialogTwo, DialogThree, DialogFour, DialogFive], [])

  const currentDialog = useRef(dialogues[0])

  useEffect(()=>{
    currentDialog.current = dialogues[dialogCounter]
  }, [currentDialog, dialogCounter, dialogues])
  
  return(
    <div class="bg-container" style={{  
      backgroundImage: "url(" + Background + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div>
      <img src={currentDialog.current} className="dialogue" alt="something"/>
      <center>
        <img src={NextImage} className="nextButton" onClick={incrementDialogue}></img>
      </center>
      </div>
    </div>
  )
}

export default SceneZero