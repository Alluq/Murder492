import React, {useState, useMemo} from 'react'
import ImageOne from "../assets/scene6_assets/scene6_1.png"
import ImageTwo from "../assets/scene6_assets/scene6_2.png"
import ImageThree from "../assets/scene6_assets/scene6_3.png"
import ImageFour from "../assets/scene6_assets/scene6_4.png"
import ImageFive from "../assets/scene6_assets/scene6_5.png"
import ImageSix from "../assets/scene6_assets/scene6_6.png"

import BackgroundImage from "../assets/scene6_assets/scene6_bg.png"

import NextImage from "../assets/next_button.png"
import References from "../assets/scene6_assets/references.png"

import "../components/SceneSix.css"

function SceneSix(props){
  const [dialogCounter, setDialogCounter] = useState(0)

  const incrementDialogue = () => {
    setDialogCounter(dialogCounter+1)
  }

  const dialogs = useMemo(() => [[ImageOne, ImageTwo], [ImageThree, ImageFour], [ImageFive, ImageSix]], [])
  const links = useMemo(()=> [
    [
      "https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.8gy6rc92c57", 
      "https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.bg3e51ginrvc"
    ],
    [
      "https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.edunhtkvzx85",
      "https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.dc8hcx7qhtqr"
    ],
    [
      "https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.38tn8kftjty8",
      "https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.khiopixxtbr"
    ]
  ], [])

  const currentDialog = dialogs[dialogCounter]
  const currentLink = links[dialogCounter]
  
  return(
    <div class="bg-container" style={{  
      backgroundImage: "url(" + BackgroundImage + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <a href={currentLink[0]} target="_blank">
        <img src={currentDialog[0]} className={"firstImage"}></img>
      </a>

      <a href={currentLink[1]} target="_blank">
      <img src={currentDialog[1]} className={"secondImage"}></img>
      </a>
      {
        (dialogCounter != dialogs.length-1) ? (
          <img src={NextImage} className="goNextButton" onClick={incrementDialogue} alt="dialog"></img>
        ) : (
          <a href="https://docs.google.com/document/d/1Hv2v_yrxK_kRHwTx36lHBIqtFCzLoPhMBIoFe31NQxg/edit#bookmark=id.nfvejmqbslka" target="_blank">
            <img src={References}
            className="referenceButton"></img>
          </a>
        )
      }
      <div>
      <center>

      </center>
      </div>
    </div>
  )
}

export default SceneSix