import Character from "../components/Character"
import Allen from "../assets/avatars/allen.png"
import Thomas from "../assets/avatars/thomas.png"
import Mary from "../assets/avatars/mary.png"
import Greg from "../assets/avatars/greg.png"
import Jenny from "../assets/avatars/jenny.png"
import Steve from "../assets/avatars/steve.png"
import William from "../assets/avatars/william.png"

import NextScene from "../components/NextScene"
import SceneBackground from "../assets/scene2.png"

import AllenOne from "../assets/scene2_dialog_assets/scene2_allen_dialog1.png"
import AllenTwo from "../assets/scene2_dialog_assets/scene2_allen_dialog2.png"
import AllenThree from "../assets/scene2_dialog_assets/scene2_allen_dialog3.png"
import AllenFour from "../assets/scene2_dialog_assets/scene2_allen_dialog4.png"
import AllenFive from "../assets/scene2_dialog_assets/scene2_allen_dialog5.png"
import AllenSix from "../assets/scene2_dialog_assets/scene2_allen_dialog6.png"
import AllenSeven from "../assets/scene2_dialog_assets/scene2_allen_dialog7.png"
import AllenEight from "../assets/scene2_dialog_assets/scene2_allen_dialog8.png"
import AllenNine from "../assets/scene2_dialog_assets/scene2_allen_dialog9.png"

import GregOne from "../assets/scene2_dialog_assets/scene2_greg_dialog1.png"
import GregTwo from "../assets/scene2_dialog_assets/scene2_greg_dialog2.png"
import GregThree from "../assets/scene2_dialog_assets/scene2_greg_dialog3.png"
import GregFour from "../assets/scene2_dialog_assets/scene2_greg_dialog4.png"
import GregFive from "../assets/scene2_dialog_assets/scene2_greg_dialog5.png"
import GregSix from "../assets/scene2_dialog_assets/scene2_greg_dialog6.png"

import JennyOne from "../assets/scene2_dialog_assets/scene2_jenny_dialog1.png"
import JennyTwo from "../assets/scene2_dialog_assets/scene2_jenny_dialog2.png"
import JennyThree from "../assets/scene2_dialog_assets/scene2_jenny_dialog3.png"
import JennyFour from "../assets/scene2_dialog_assets/scene2_jenny_dialog4.png"
import JennyFive from "../assets/scene2_dialog_assets/scene2_jenny_dialog5.png"
import JennySix from "../assets/scene2_dialog_assets/scene2_jenny_dialog6.png"
import JennySeven from "../assets/scene2_dialog_assets/scene2_jenny_dialog7.png"

import MaryOne from "../assets/scene2_dialog_assets/scene2_mary_dialog1.png"
import MaryTwo from "../assets/scene2_dialog_assets/scene2_mary_dialog2.png"
import MaryThree from "../assets/scene2_dialog_assets/scene2_mary_dialog3.png"
import MaryFour from "../assets/scene2_dialog_assets/scene2_mary_dialog4.png"
import MaryFive from "../assets/scene2_dialog_assets/scene2_mary_dialog5.png"
import MarySix from "../assets/scene2_dialog_assets/scene2_mary_dialog6.png"
import MarySeven from "../assets/scene2_dialog_assets/scene2_mary_dialog7.png"
import MaryEight from "../assets/scene2_dialog_assets/scene2_mary_dialog8.png"

import SteveOne from "../assets/scene2_dialog_assets/scene2_steve_dialog1.png"
import SteveTwo from "../assets/scene2_dialog_assets/scene2_steve_dialog2.png"
import SteveThree from "../assets/scene2_dialog_assets/scene2_steve_dialog3.png"
import SteveFour from "../assets/scene2_dialog_assets/scene2_steve_dialog4.png"

import WilliamOne from "../assets/scene2_dialog_assets/scene2_william_dialog1.png"
import WilliamTwo from "../assets/scene2_dialog_assets/scene2_william_dialog2.png"
import WilliamThree from "../assets/scene2_dialog_assets/scene2_william_dialog3.png"
import WilliamFour from "../assets/scene2_dialog_assets/scene2_william_dialog4.png"
import WilliamFive from "../assets/scene2_dialog_assets/scene2_william_dialog5.png"
import WilliamSix from "../assets/scene2_dialog_assets/scene2_william_dialog6.png"

const allenProps = {
  image: Allen,
  dialogs: [AllenOne, AllenTwo, AllenThree, AllenFour, AllenFive, AllenSix, AllenSeven, AllenEight, AllenNine],
  name: "allen2"
}

const gregProps = {
  image: Greg,
  dialogs: [GregOne, GregTwo, GregThree, GregFour, GregFive, GregSix],
  name: "greg2"
}

const jennyProps = {
  image: Jenny,
  dialogs: [JennyOne, JennyTwo, JennyThree, JennyFour, JennyFive, JennySix, JennySeven],
  name: "jenny2"
}

const maryProps = {
  image: Mary,
  dialogs: [MaryOne, MaryTwo, MaryThree, MaryFour, MaryFive, MarySix, MarySeven, MaryEight],
  name: "mary2"
}

const steveProps = {
  image: Steve,
  dialogs: [SteveOne, SteveTwo, SteveThree, SteveFour],
  name: "steve2"
}

const williamProps = {
  image: William,
  dialogs: [WilliamOne, WilliamTwo, WilliamThree, WilliamFour, WilliamFive, WilliamSix],
  name: "william2"
}


function SceneTwo(props){
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
      <Character props={gregProps}></Character>
      <Character props={maryProps}></Character>
      <Character props={steveProps}></Character>
      <Character props={williamProps}></Character>
      <Character props={jennyProps}></Character>
    </div>
  )
}

export default SceneTwo





