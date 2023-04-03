import SceneZero from "./scenes/SceneZero"
import SceneOne from "./scenes/SceneOne"
import Phone from "./components/Phone"
import React, { useContext, useEffect, useRef } from 'react'
import { sceneContext } from "./context/SceneProvider";

function Home() {
  const [sceneCounter] = useContext(sceneContext)

  const sceneZero = <SceneZero></SceneZero>

    
  const sceneOne = <SceneOne></SceneOne>
  const scenes = [sceneZero, sceneOne]

  const currentScene = useRef(scenes[0])

  useEffect(() =>{
    currentScene.current = [scenes[sceneCounter]]
  }, [currentScene, sceneCounter, scenes]
  )

  return (
    <div>
      {currentScene.current}
      <Phone></Phone>
    </div>
  );
}

export default Home