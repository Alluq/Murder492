import React, {useState, useEffect} from "react"
import SceneBackground from "../assets/scene0_assets/scene0.png"
import Allen from "../assets/scene4_assets/scene4_allen.png"
import AllenShadow from "../assets/scene4_assets/scene4_allen_shadow.png"
import Greg from "../assets/scene4_assets/scene4_greg.png"
import GregShadow from "../assets/scene4_assets/scene4_greg_shadow.png"
import Jenny from "../assets/scene4_assets/scene4_jenny.png"
import JennyShadow from "../assets/scene4_assets/scene4_jenny_shadow.png"
import Mary from "../assets/scene4_assets/scene4_mary.png"
import MaryShadow from "../assets/scene4_assets/scene4_mary_shadow.png"
import Steve from "../assets/scene4_assets/scene4_steve.png"
import SteveShadow from "../assets/scene4_assets/scene4_steve_shadow.png"
import William from "../assets/scene4_assets/scene4_william.png"
import WilliamShadow from "../assets/scene4_assets/scene4_william_shadow.png"
import NextScene from "../components/NextScene"

import AllenEnding from "../assets/scene4_assets/scene4_ending_allen_incorrect.png"
import JennyEnding from "../assets/scene4_assets/scene4_ending_jenny_incorrect.png"
import MaryEnding from "../assets/scene4_assets/scene4_ending_mary_incorrect.png"
import SteveEnding from "../assets/scene4_assets/scene4_ending_steve_incorrect.png"
import WilliamEnding from "../assets/scene4_assets/scene4_ending_correct.png"
import GregEnding from "../assets/scene4_assets/scene4_ending_greg_incorrect.png"

import "../components/SceneFour.css"


const Endings = {
  "allen" : AllenEnding,
  "jenny" : JennyEnding,
  "mary" : MaryEnding,
  "steve" : SteveEnding,
  "william" : WilliamEnding,
  "greg" : GregEnding
}

function Suspect({char, shadow, name, selectSuspect, suspect}){
  const [shadowOn, setShadow] = useState(false)


  const addShadow = () => {
    setShadow(true)
  }
  
  const removeShadow = () => {
    if(suspect != name){
      setShadow(false)
    }
  }

  const chooseSuspect = () => {
    setShadow(true)
    console.log(shadowOn)
    selectSuspect(name)
  }

  return(
    <>
      <img src={char} onMouseOver={addShadow} onMouseOut={removeShadow} onClick={chooseSuspect} className={name}></img>
      {(shadowOn) ? (
        <img src={shadow} className={name+"-shadow"}></img>
      ): (
        <></>
      )}
    </>
  )
}

function SceneFour(){
  const [suspect, selectSuspect] = useState("")
  const [lockIn, setLockIn] = useState(false)
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
        (suspect === "" || !lockIn) ? (
          <Suspect char={Mary} shadow={MaryShadow} name={"mary"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
        ) : (
          <></>
        )
      }
    </div>
  )
}

export default SceneFour

