import React, { useState, useEffect } from "react"
import SceneBackground from "../assets/scene3_bg.png"
import NextScene from "../components/NextScene"
import Dialog from "../assets/scene3_assets/scene3_0.png"
import CrimePhone from "../components/CrimePhone"

function SceneThree(props){
  const [showPhone, setShowPhone] = useState(false)

  useEffect(() => { 
    const keyHandler = (event) => {
      if(event.key == "m"){
        setShowPhone(true)
        console.log(showPhone)
      }
    }

    document.addEventListener('keydown', keyHandler)
    return function cleanup() {
      document.removeEventListener('keydown', keyHandler);
    }
  }, [showPhone, setShowPhone])

  return(
    <div class="bg-container" style={{  
      backgroundImage: "url(" + SceneBackground + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <NextScene></NextScene>
      {
        (!showPhone) ? (
          <center>
            <img src={Dialog}>
            </img>
          </center>
        ) : (
          <center>
            <CrimePhone></CrimePhone>
          </center>
        )
      }
    </div>
  )
}

export default SceneThree