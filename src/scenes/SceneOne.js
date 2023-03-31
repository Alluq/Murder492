import Character from "../components/Character"
import Allen from "../assets/allen.png"
import React from "react";
import SceneBackground from "../assets/scene1.png"

function SceneOne(props){
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
      <div>
      <Character image={Allen} title={"Allen's Dialog"} dialog={"I am monke"}
      style={{ //How do I reposition the character
        bottom: "100%",
        right: "100%"
      }}></Character>
      </div>
    </div>
  )
}

export default SceneOne