import Character from "../components/Character"
import Allen from "../assets/allen.png"
import Ambulance from "../assets/ambulence.png"
import React from "react";
import SceneBackground from "../assets/scene1.png"
import Thomas from "../assets/thomas.png"
import Mary from "../assets/mary.png"
import Police from "../assets/police.png"
import Trash from "../assets/trashcan.png"
import Camera from "../assets/camera.png"
import FootPrint from "../assets/footprints.png"
import Wallet from "../assets/wallet.png"


const allenProps = {
  image: Allen, //Image
  title: "Allen's Dialog", //Dialog Title
  dialog: "I am monke", //Dialog Content
  name: "allen" //Used for css position
}

const ambulanceProps = {
  image: Ambulance,
  title: "Ambulance",
  dialog: "Ambulance Dialog",
  name: "ambulance"
}

const thomasProps = {
  image: Thomas,
  title: "Thomas's Dialog",
  dialog: "",
  name: "thomas"
}

const maryProps = {
  image: Mary,
  title: "Mary Dialog",
  dialog: "",
  name: "mary"
}

const policeProps = {
  image: Police,
  title: "police Dialog",
  dialog: "",
  name: "police"
}

const trashProps = {
  image: Trash,
  title: "What's in the trash",
  dialog: "Some clues",
  name: "trash"
}

const cameraProps = {
  image: Camera,
  title: "What's in on film?",
  dialog: "Some clues",
  name: "camera"
}

const footProps = {
  image: FootPrint, //Image
  title: "Found Some Footprints", //Dialog Title
  dialog: "Some clues", //Dialog Content
  name: "footprint" //Used for css position
}

const walletProps = {
  image: Wallet, //Image
  title: "Found a Wallet", //Dialog Title
  dialog: "Some clues", //Dialog Content
  name: "wallet" //Used for css position
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
      <Character props={allenProps}></Character>
      <Character props={ambulanceProps}></Character>
      <Character props={thomasProps}></Character>
      <Character props={maryProps}></Character>
      <Character props={policeProps}></Character>
      <Character props={trashProps}></Character>
      <Character props={cameraProps}></Character>
      <Character props={footProps}></Character>
      <Character props={walletProps}></Character>
    </div>
  )
}

export default SceneOne