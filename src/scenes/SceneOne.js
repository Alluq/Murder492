import Character from "../components/Character"
import Allen from "../assets/avatars/allen.png"
import Ambulance from "../assets/scene_1_assets/ambulence.png"
import React from "react"
import SceneBackground from "../assets/scene1.png"
import Thomas from "../assets/avatars/thomas.png"
import Mary from "../assets/avatars/mary.png"
import Police from "../assets/avatars/greg.png"
import Trash from "../assets/scene_1_assets//trashcan.png"
import Camera from "../assets/scene_1_assets/camera.png"
import FootPrint from "../assets/scene_1_assets/footprints.png"
import Wallet from "../assets/scene_1_assets/wallet.png"
import Sweater from "../assets/scene_1_assets/sweater.png"
import NextScene from "../components/NextScene"



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
  name: "allen1" //Used for css position
}

const ambulanceProps = {
  image: Ambulance,
  dialogs: [AmbulanceOne, AmbulanceTwo],
  name: "ambulance1"
}

const thomasProps = {
  image: Thomas,
  dialogs: [Body],
  name: "thomas1"
}

const maryProps = {
  image: Mary,
  dialogs: [MaryOne, MaryTwo],
  name: "mary1"
}

const policeProps = {
  image: Police,
  dialogs: [PoliceOne, PoliceTwo],
  name: "police1"
}

const trashProps = {
  image: Trash,
  dialogs: [TrashDialog],
  name: "trash1"
}

const cameraProps = {
  image: Camera,
  dialogs: [CCTV],
  name: "camera1"
}

const footProps = {
  image: FootPrint, //Image
  dialogs: [FootPrintDialog],
  name: "footprint1" //Used for css position
}

const walletProps = {
  image: Wallet, //Image
  dialogs: [WalletDialog],
  name: "wallet1" //Used for css position
}

const sweaterProps = {
  image: Sweater,
  dialogs: [SweaterDialog],
  name: "sweater1"
}


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
      <NextScene></NextScene>
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
    </div>
  )
}

export default SceneOne