import Character from "../components/Character"
import Allen from "../assets/avatars/allen.png"
import Ambulance from "../assets/scene_1_assets/ambulence.png"
import React, { useEffect, useState } from "react";
import SceneBackground from "../assets/scene1.png"
import Thomas from "../assets/avatars/thomas.png"
import Mary from "../assets/avatars/mary.png"
import Police from "../assets/avatars/greg.png"
import Trash from "../assets/scene_1_assets//trashcan.png"
import Camera from "../assets/scene_1_assets/camera.png"
import FootPrint from "../assets/scene_1_assets/footprints.png"
import Wallet from "../assets/scene_1_assets/wallet.png"
import Sweater from "../assets/scene_1_assets/sweater.png"
import Phone from "../components/Phone";

import AllenOne from "../assets/scene1_dialog_assets/scene1_allen_dialog1.png"
import AllenTwo from "../assets/scene1_dialog_assets/scene1_allen_dialog2.png"
import AmbulanceOne from "../assets/scene1_dialog_assets/scene1_ambulence_dialog1.png"
import AmbulanceTwo from "../assets/scene1_dialog_assets/scene1_ambulence_dialog2.png"
import Body from "../assets/scene1_dialog_assets/scene1_body_dialog.png"
import CCTV from "../assets/scene1_dialog_assets/scene1_cctv_dialog.png"
import FootPrintDialog from "../assets/scene1_dialog_assets/scene1_footprints_dialog.png"
import MaryOne from "../assets/scene1_dialog_assets/scene1_mary_dialog1.png"
import MaryTwo from "../assets/scene1_dialog_assets/scene1_mary_dialog2.png"
import PoliceOne from "../assets/scene1_dialog_assets/scene1_police_dialog1.png"
import PoliceTwo from "../assets/scene1_dialog_assets/scene1_police_dialog2.png"
import SweaterDialog from "../assets/scene1_dialog_assets/scene1_sweater_dialog.png"
import TrashDialog from "../assets/scene1_dialog_assets/scene1_trashcan_dialog.png"
import WalletDialog from "../assets/scene1_dialog_assets/scene1_wallet_phone_dialog.png"

const allenProps = {
  image: Allen, //Image
  dialogs: [AllenOne, AllenTwo],
  name: "allen" //Used for css position
}

const ambulanceProps = {
  image: Ambulance,
  dialogs: [AmbulanceOne, AmbulanceTwo],
  name: "ambulance"
}

const thomasProps = {
  image: Thomas,
  dialogs: [Body],
  name: "thomas"
}

const maryProps = {
  image: Mary,
  dialogs: [MaryOne, MaryTwo],
  name: "mary"
}

const policeProps = {
  image: Police,
  dialogs: [PoliceOne, PoliceTwo],
  name: "police"
}

const trashProps = {
  image: Trash,
  dialogs: [TrashDialog],
  name: "trash"
}

const cameraProps = {
  image: Camera,
  dialogs: [CCTV],
  name: "camera"
}

const footProps = {
  image: FootPrint, //Image
  dialogs: [FootPrintDialog],
  name: "footprint" //Used for css position
}

const walletProps = {
  image: Wallet, //Image
  dialogs: [WalletDialog],
  name: "wallet" //Used for css position
}

const sweaterProps = {
  image: Sweater,
  dialogs: [SweaterDialog],
  name: "sweater"
}


function SceneOne(props){
  const [phoneActive, setPhoneActive] = useState({phoneActive: false})

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
  }, [phoneActive])
  
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
      <Character props={allenProps}></Character>
      <Character props={ambulanceProps}></Character>
      <Character props={thomasProps}></Character>
      <Character props={maryProps}></Character>
      <Character props={policeProps}></Character>
      <Character props={trashProps}></Character>
      <Character props={cameraProps}></Character>
      <Character props={footProps}></Character>
      <Character props={walletProps}></Character>
      <Character props={sweaterProps}></Character>
      <Phone active={phoneActive}></Phone>
    </div>
  )
}

export default SceneOne