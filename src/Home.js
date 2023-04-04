import SceneZero from "./scenes/SceneZero"
import SceneOne from "./scenes/SceneOne"
import Phone from "./components/Phone"
import React, { useContext, useMemo} from 'react'
import { sceneContext } from "./context/SceneProvider";

function Home() {
  const [sceneCounter] = useContext(sceneContext)

  const scenes = useMemo(()=>[<SceneZero></SceneZero>, <SceneOne></SceneOne>], [])

  const currentScene = scenes[sceneCounter]

  return (
    <div>
      {currentScene}
    </div>
  );
}

export default Home