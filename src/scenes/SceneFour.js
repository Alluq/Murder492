import React, {useState} from "react"
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
import SelectImage from "../assets/scene4_assets/select_button.png"
import TryAgainImage from "../assets/scene4_assets/try_again_button.png"
import MoreInfoImage from "../assets/scene4_assets/more_info_button.png"
import RevealImage from "../assets/scene4_assets/reveal_button.png"

import AllenEnding from "../assets/scene4_assets/scene4_ending_allen_incorrect.png"
import JennyEnding from "../assets/scene4_assets/scene4_ending_jenny_incorrect.png"
import MaryEnding from "../assets/scene4_assets/scene4_ending_mary_incorrect.png"
import SteveEnding from "../assets/scene4_assets/scene4_ending_steve_incorrect.png"
import WilliamEnding from "../assets/scene4_assets/scene4_ending_correct.png"
import GregEnding from "../assets/scene4_assets/scene4_ending_greg_incorrect.png"
import { sceneContext } from "../context/SceneProvider"

import { useContext } from "react"

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
  const [shadowOn, setShadow] = useState(suspect === name)


  const addShadow = () => {
    setShadow(true)
  }
  
  const removeShadow = () => {
      setShadow(false)
  }

  const chooseSuspect = () => {
    setShadow(true)
    selectSuspect(name)
  }

  return(
    <>
      <img src={char} onMouseOver={addShadow} onMouseOut={removeShadow} onClick={chooseSuspect} className={name} alt={name}></img>
      <img src={shadow} id={name+"-shadow"} className={suspect === name || (shadowOn && suspect !== name) ? "active" : "hidden"} alt={name}></img>
    </>
  )
}

function SceneFour(){
  const [suspect, selectSuspect] = useState("")
  const [lockIn, setLockIn] = useState(false)

  const Ending = Endings[suspect]

  const [sceneCounter, setSceneCounter] = useContext(sceneContext)
  
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
      {
        (suspect === "" || !lockIn) ? (
          <div>
            <Suspect char={Mary} shadow={MaryShadow} name={"mary"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
            <Suspect char={Steve} shadow={SteveShadow} name={"steve"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
            <Suspect char={Jenny} shadow={JennyShadow} name={"jenny"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
            <Suspect char={Greg} shadow={GregShadow} name={"greg"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
            <Suspect char={Allen} shadow={AllenShadow} name={"allen"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
            <Suspect char={William} shadow={WilliamShadow} name={"william"} selectSuspect={selectSuspect} suspect={suspect}></Suspect>
            <img src={SelectImage} className="nextButton" onClick={() => setLockIn(true)} alt={"select"}/>
          </div>
        ) : (
          (suspect === "william") ? (
            <div>
              <img src={Ending} className="ending" alt={"select"}/>
              <img src={RevealImage} className="try-again nextButton" onClick={() => setSceneCounter(sceneCounter+1)} alt={"select"}/>
              <img src={MoreInfoImage} className="more-info nextButton" onClick={() => setSceneCounter(sceneCounter + 2)} alt={"select"}/>
            </div>
          ) : (
            <div>
            <img src={Ending} className="ending" alt={"select"}/>
            <img src={TryAgainImage} className="try-again nextButton" onClick={() => setSceneCounter(0)} alt={"select"}/>
            <img src={MoreInfoImage} className="more-info nextButton" onClick={() => setSceneCounter(sceneCounter + 2)} alt={"select"}/>
            </div>
          ) 
        )
      }
    </div>
  )
}

export default SceneFour

