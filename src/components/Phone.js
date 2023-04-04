import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PhoneBase from "../assets/phone_app_assets/phone_screen_with_phone.png"
import CrimebotAppIcon from "../assets/phone_app_assets/crimebot_app_icon.png"
import CrimeSketchIcon from "../assets/phone_app_assets/crimesketch_app_icon.png"
import ProfilesIcon from "../assets/phone_app_assets/profiles_icon.png"
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
import "./Phone.css"
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
  

function Phone({ active }){
  const [isHomeScreen, setIsHomeScreen] = useState(true)
  const handleClose = () => setIsHomeScreen(false);
  const handleShow = () => setIsHomeScreen(true);
  return(
    <div className={active ? "active" : "inactive"}>
      <img src={PhoneBase} className={"phone"} alt="phone" onClick={handleShow}/>
      <PhoneApp icon={CrimebotAppIcon} iconId={"crimebot-icon"} screen={CrimeBotScreen} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <PhoneApp icon={CrimeSketchIcon} iconId={"crime-sketch-icon"} screen={CrimeSketchScreen} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      {/* <img src={ProfilesIcon} className={"button"} id={"profiles-icon"} alt="profiles-icon" onClick={handleShow}/> */}
      <PhoneApp icon={ForensicsIcon} iconId={"forensics-icon"} screen={ForensicsScreen} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <PhoneApp icon={HackerAppIcon} iconId={"hacker-app-icon"} screen={HackerAppScreen} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <PhoneApp icon={DNAAnalysisIcon} iconId={"dna-analyser-icon"} screen={DNAAnalyserScreen} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
      <PhoneApp icon={FacialRecogIcon} iconId={"facial-recog-icon"} screen={FacialRecogScreen} isHomeScreen={isHomeScreen} setIsHomeScreen={setIsHomeScreen}/>
    </div>
  )
}

function PhoneApp({icon, iconId, screen, isHomeScreen, setIsHomeScreen}){
  const [active, setActive] = useState(false)
  return (
    <>
      <img className={isHomeScreen ? "button" : "hidden"} src={icon} id={iconId} alt={iconId} onClick={() => {
        setActive(true)
        setIsHomeScreen(false)
      }}/>
      <div className={active ? "active" : "hidden"}>
        <img src={screen} className={"phone"}/>
        <img src={BackButton} className={"back-button button"} onClick={() => {
          setActive(false)
          setIsHomeScreen(true)
        }}/>
      </div>
    </>
  )
}

export default Phone