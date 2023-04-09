import SceneZero from "./scenes/SceneZero"
import SceneOne from "./scenes/SceneOne"
import SceneTwo from "./scenes/SceneTwo"
import Phone from "./components/Phone"
import React, { useContext, useMemo, useEffect, useState} from 'react'
import { sceneContext } from "./context/SceneProvider";

function Home() {
  const sceneCounter = useContext(sceneContext)[0]
  const [phoneActive, setPhoneActive] = useState(false)

  const scenes = useMemo(()=>[<SceneZero></SceneZero>, <SceneOne></SceneOne>, <SceneTwo></SceneTwo>], [])

  const currentScene = scenes[sceneCounter]

  useEffect(() => { 
    const keyHandler = (event) => {
      if(event.key == "m"){
        setPhoneActive(!phoneActive)
        console.log(phoneActive)
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