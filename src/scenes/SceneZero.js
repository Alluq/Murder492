import DialogOne from "../assets/scene0_assets/scene0_1.png"
import DialogTwo from "../assets/scene0_assets/scene0_2.png"
import DialogThree from "../assets/scene0_assets/scene0_3.png"
import DialogFour from "../assets/scene0_assets/scene0_4.png"
import DialogFive from "../assets/scene0_assets/scene0_5.png"
import Background from "../assets/scene0_assets/scene0.png"
import NextImage from "../assets/next_button.png"
import "../components/Scene.css"
import { useContext, useState, useMemo } from "react"
import { sceneContext } from "../context/SceneProvider"

function SceneZero(props){

  const [dialogCounter, setDialogCounter] = useState(0)

  const [sceneCounter, setSceneCounter] = useContext(sceneContext)

  const incrementDialogue = () => {
    setDialogCounter(dialogCounter+1)
    if(dialogCounter === 4){
      setSceneCounter(sceneCounter+1)
      console.log(sceneCounter)
    }
  }

  const dialogs = useMemo(() => [DialogOne, DialogTwo, DialogThree, DialogFour, DialogFive], [])

  const currentDialog = dialogs[dialogCounter]
  
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
      <img src={currentDialog} className="dialog" alt="something"/>
      <center>
        <img src={NextImage} className="nextButton" onClick={incrementDialogue} alt="dialog"></img>
      </center>
      </div>
    </div>
  )
}

export default SceneZero