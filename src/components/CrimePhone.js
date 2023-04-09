import React, { useState, useMemo } from 'react';
import PhoneBase from "../assets/phone_app_assets/phone_screen_with_phone.png"
import CrimebotAppIcon from "../assets/phone_app_assets/crimebot_app_icon.png"
import CrimeSketchIcon from "../assets/phone_app_assets/crimesketch_app_icon.png"
import ForensicsIcon from "../assets/phone_app_assets/forsenics_app_icon.png"
import HackerAppIcon from "../assets/phone_app_assets/hackerapp_app_icon.png"
import DNAAnalysisIcon from "../assets/phone_app_assets/dna_analysis_app_icon.png"
import FacialRecogIcon from "../assets/phone_app_assets/facial_recog_app_icon.png"
import BackButton from "../assets/phone_app_assets/back_button_small.png"
import DNAAnalyserScreen from "../assets/phone_app_assets/dna_analyzer_with_phone.png"
import FacialRecogScreen from "../assets/phone_app_assets/facial_recog_with_phone.png"
import HackerAppScreen from "../assets/phone_app_assets/hackerapp_with_phone.png"
import ForensicsScreen from "../assets/phone_app_assets/forensicsai_with_phone.png"
import CrimeSketchScreen from "../assets/phone_app_assets/crimesketch_with_phone.png"
import CrimeBotScreen from "../assets/phone_app_assets/crimebot_with_phone.png"
import NextButton from "../assets/next_button.png"
import "./CrimePhone.css"

import BotOne from "../assets/scene3_assets/scene3_crimebot1.png"
import BotTwo from "../assets/scene3_assets/scene3_crimebot2.png"
import BotThree from "../assets/scene3_assets/scene3_crimebot3.png"
import BotFour from "../assets/scene3_assets/scene3_crimebot4.png"
import BotFive from "../assets/scene3_assets/scene3_crimebot5.png"

import DNAOne from "../assets/scene3_assets/scene3_dna1.png"
import DNATwo from "../assets/scene3_assets/scene3_dna2.png"
import DNAThree from "../assets/scene3_assets/scene3_dna3.png"

import ForensicsOne from "../assets/scene3_assets/scene3_forensics1.png"
import ForensicsTwo from "../assets/scene3_assets/scene3_forensics2.png"
import ForensicsThree from "../assets/scene3_assets/scene3_forensics3.png"
import ForensicsFour from "../assets/scene3_assets/scene3_forensics4.png"

import FROne from "../assets/scene3_assets/scene3_fr1.png"
import FRTwo from "../assets/scene3_assets/scene3_fr2.png"
import FRThree from "../assets/scene3_assets/scene3_fr3.png"
import FRFour from "../assets/scene3_assets/scene3_fr4.png"

import HackerOne from "../assets/scene3_assets/scene3_hacker1.png"
import HackerTwo from "../assets/scene3_assets/scene3_hacker2.png"
import HackerThree from "../assets/scene3_assets/scene3_hacker3.png"
import HackerFour from "../assets/scene3_assets/scene3_hacker4.png"
import HackerFive from "../assets/scene3_assets/scene3_hacker5.png"
import HackerSix from "../assets/scene3_assets/scene3_hacker6.png"

import SketchOne from "../assets/scene3_assets/scene3_sketch1.png"
import SketchTwo from "../assets/scene3_assets/scene3_sketch2.png"
import SketchThree from "../assets/scene3_assets/scene3_sketch3.png"
import SketchFour from "../assets/scene3_assets/scene3_sketch4.png"

const BotDialog = [BotOne, BotTwo, BotThree, BotFour, BotFive]

const DNADialog = [DNAOne, DNATwo, DNAThree]

const ForensicsDialog = [ForensicsOne, ForensicsTwo, ForensicsThree, ForensicsFour]

const FRDialog = [FROne, FRTwo, FRThree, FRFour]

const HackerDialog = [HackerOne, HackerTwo, HackerThree, HackerFour, HackerFive, HackerSix]

const SketchDialog = [SketchOne, SketchTwo, SketchThree, SketchFour]

function CrimePhone(){
  const [isHomeScreen, setIsHomeScreen] = useState(true)
  const handleClose = () => setIsHomeScreen(false);
  const handleShow = () => setIsHomeScreen(true);
  return(
    <div>
      <img src={PhoneBase} className={"crime-phone"} alt="phone" onClick={handleShow}/>
      <InternalApp icon={CrimebotAppIcon} iconId={"crime-crimebot-icon"} dialogs={BotDialog} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <InternalApp icon={CrimeSketchIcon} iconId={"crime-crime-sketch-icon"} dialogs={SketchDialog} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <InternalApp icon={ForensicsIcon} iconId={"crime-forensics-icon"} dialogs={ForensicsDialog} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <InternalApp icon={HackerAppIcon} iconId={"crime-hacker-app-icon"}  dialogs={HackerDialog} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <InternalApp icon={DNAAnalysisIcon} iconId={"crime-dna-analyser-icon"}  dialogs={DNADialog} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <InternalApp icon={FacialRecogIcon} iconId={"crime-facial-recog-icon"} dialogs={FRDialog} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
    </div>
  )
}

function InternalApp({icon, iconId, dialogs, isHomeScreen, setIsHomeScreen}){
  const [active, setActive] = useState(false)

  const [dialogCounter, setDialog] = useState(0)

  const incrementDialogue = (e) => {
    e.stopPropagation()
    setDialog(dialogCounter+1)
  }

  const currentDialogs = useMemo(()=> dialogs, [dialogs])

  const currentDialog = currentDialogs[dialogCounter]
  
  const handleClose = () => {
    setActive(false)
    setIsHomeScreen(true)
    setDialog(0)
  }
  return (
    <>
      <img className={isHomeScreen ? "button" : "hidden"} src={icon} id={iconId} alt={iconId} onClick={() => {
        setActive(true)
        setIsHomeScreen(false)
      }}/>
      <div className={active ? "active" : "hidden"}>
        <img src={currentDialog}className={"crime-phone"} ></img>
        {
          (dialogCounter !== currentDialogs.length-1) ? (
            <img src={NextButton} className={"button"} onClick={incrementDialogue}></img>
          ) : (
          <img src={BackButton} className={"button"} onClick={handleClose}/>
          )
        }
      </div>
    </>
  )
}

export default CrimePhone