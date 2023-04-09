import ProfilesIcon from "../assets/phone_app_assets/profiles_icon.png"
import ProfileOne from "../assets/phone_app_assets/profiles/profile_allen.png"
import ProfileTwo from "../assets/phone_app_assets/profiles/profile_greg.png"
import ProfileThree from "../assets/phone_app_assets/profiles/profile_jenny.png"
import ProfileFour from "../assets/phone_app_assets/profiles/profile_mary.png"
import ProfileFive from "../assets/phone_app_assets/profiles/profile_jenny.png"
import ProfileSix from "../assets/phone_app_assets/profiles/profile_thomas.png"
import ProfileSeven from "../assets/phone_app_assets/profiles/profile_william.png"
import NextButton from "../assets/next_button.png"
import BackButton from "../assets/back_button.png"

import "./Phone.css"
import "./CrimePhone.css"
import { useMemo, useState } from "react"

const Profiles = [ProfileOne, ProfileTwo, ProfileThree, ProfileFour, ProfileFive, ProfileSix, ProfileSeven]

function ProfilesApp({isHomeScreen, setIsHomeScreen, isEarly}){

  const CurrentProfiles = useMemo(() => Profiles, [Profiles])
  const [active, setActive] = useState(false)

  const [dialogCounter, setDialog] = useState(0)

  const incrementDialogue = (e) => {
    e.stopPropagation()
    setDialog(dialogCounter+1)
  }

  const iconName = isEarly ? "profiles-icon" : "crime-profiles-icon"

  const buttonName = isEarly ? "button-smaller" : "crime-button"

  const dialogName = isEarly ? "phone" : "crime-phone"

  const currentProfile = CurrentProfiles[dialogCounter]
  
  const handleClose = () => {
    setActive(false)
    setIsHomeScreen(true)
    setDialog(0)
  }
  return (
    <>
      <img className={isHomeScreen ? buttonName : "hidden"} src={ProfilesIcon} id={iconName} alt={iconName} onClick={() => {
        setActive(true)
        setIsHomeScreen(false)
      }}/>
      <div className={active ? "active" : "hidden"}>
        <img src={currentProfile} className={dialogName} ></img>
        {
          (dialogCounter !== CurrentProfiles.length-1) ? (
            <img src={NextButton} className={buttonName} onClick={incrementDialogue}></img>
          ) : (
          <img src={BackButton} className={buttonName} onClick={handleClose}/>
          )
        }
      </div>
    </>
  )
}

export default ProfilesApp