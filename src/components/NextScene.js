import nextScene from "../assets/next_scene.png"
import { sceneContext } from "../context/SceneProvider"
import React, { useContext } from "react";
import "./SceneOne.css"

function NextScene(props){
  const [sceneCounter, setSceneCounter] = useContext(sceneContext)

  const progressScene = () => {
    setSceneCounter(sceneCounter+1)
  }

  return(
    <img src={nextScene} onClick={progressScene} className="nextScene">
    </img>
  )
}

export default NextScene