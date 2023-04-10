import SceneZero from "./scenes/SceneZero"
import SceneOne from "./scenes/SceneOne"
import SceneTwo from "./scenes/SceneTwo"
import SceneThree from "./scenes/SceneThree"
import SceneFive from "./scenes/SceneFive"
import SceneFour from "./scenes/SceneFour"
import SceneSix from "./scenes/SceneSix" 
import Phone from "./components/Phone"
import React, { useContext, useMemo, useEffect, useState} from 'react'
import { sceneContext } from "./context/SceneProvider";

function Home() {
  const sceneCounter = useContext(sceneContext)[0]
  const [phoneActive, setPhoneActive] = useState(false)

  const scenes = useMemo(()=>[<SceneZero></SceneZero>, <SceneOne></SceneOne>, <SceneTwo></SceneTwo>, <SceneThree></SceneThree>, <SceneFour></SceneFour>, <SceneFive></SceneFive>, <SceneSix></SceneSix>], [])

  const currentScene = scenes[sceneCounter]

  useEffect(() => { 
    const keyHandler = (event) => {
      if(event.key === "m"){
        setPhoneActive(!phoneActive)
      }
    }

    document.addEventListener('keydown', keyHandler)
    return function cleanup() {
      document.removeEventListener('keydown', keyHandler);
    }
  }, [phoneActive, setPhoneActive])

  return (
    <div>
      {currentScene}
      <Phone active={(sceneCounter === 1 || sceneCounter === 2) && phoneActive}></Phone>
    </div>
  );
}

export default Home