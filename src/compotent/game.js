import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissor from "../images/scissor.png"

import {useState} from 'react';
import "../index.css";


const Game = () => {
    const [player, setPlayer] = useState("")
    const [comp, setComp] = useState("")
    const [result, setResult] = useState("")
    const [playerPoint, setPlayerpPoint] = useState(0)
    const [compPoint, setCompPoint] = useState(0)

    const CliclButton = (pleyerAction) => {
        const images = {
            "Kamen" : rock,
            "Nojnisy" : paper,
            "Bumaga" : scissor
        }
        const actions = ["Kamen", "Nojnisy", "Bumaga"]
        const compAction = actions[Math.floor(Math.random() * 3)]


        if (pleyerAction === compAction) {
            setResult('nichya')
        }else if((pleyerAction === "Kamen" && compAction === "Nojnisy") ||
            (pleyerAction === "Nojnisy" && compAction === "Bumaga") ||
            (pleyerAction === "Bumaga" && compAction === "Kamen")){
            setResult("vi proigrali")

            setCompPoint(compPoint + 1)
        }else {

            setResult("vi viygrali")
            setPlayerpPoint(playerPoint + 1)

        }

        setPlayer(images[pleyerAction])
        setComp(images[compAction])

    }

    return (
        <div>
            <button onClick={() => CliclButton("Kamen")}  type="button">Kamen</button>
            <button onClick={() => CliclButton("Nojnisy")}  type="button">Nojnisy</button>
            <button onClick={() => CliclButton("Bumaga")}  type="button">Bumaga</button>
            <span>{result}</span>
            <div className="point">Igrok: {playerPoint} | Compiuter: {compPoint} </div>
            <br/>
            <div className="row">
                <div className="col-6">
                    <div className="i">Igrok:</div>
                    <img className="gema-img" src={player} alt=""/>
                </div>
                <div className="col-6">
                    <div className="C">Compiuter:</div>
                    <img className="gema-img"  src={comp} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Game;