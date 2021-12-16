import React, {useState} from 'react';
import "../index.css";

const GuessNumber = () => {
    const [correct, setCorrect] = useState(Math.ceil(Math.random() * 10))
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [lives, setLives] = useState(3)
    const [playAgain, togglePlayAgain] = useState(false)
    const [win, setWin] = useState(+localStorage.getItem("win"))
    const [compWin, setCompWin] = useState(+localStorage.getItem("compWin"))
    const [help, toggleHelp] = useState(false)


    const playerNumberChange = (e) => {
       const n = Math.min( Math.max(e.target.value, 0), 10 ) || ""
        setNumber(n)

    }

    const playAgainClick = () => {
        togglePlayAgain(false)
        setLives(3)
        setCorrect(Math.ceil(Math.random() * 10))
        setMessage("")
        setNumber("")
    }

    const checkedChange = (e) => {
        toggleHelp(e.target.checked)
    }

    const resetLs = () => {
      localStorage.removeItem("win")
      localStorage.removeItem("compWin")
        setWin(0)
        setCompWin(0)
    }

    const check = () => {
        setNumber("")
        if (correct === +number){
            setMessage("ugadali")
            setWin( win + 1)
            localStorage.setItem("win", String(win + 1))
            togglePlayAgain(true)
        }else {
            if(lives - 1 === 0){
                setMessage("vy proigrali")
                setCompWin( compWin + 1)
                localStorage.setItem("compWin", String(compWin + 1))
                togglePlayAgain(true)
            }else {
                if(help){

                }else {
                    setMessage("poprobyite ewe raz")
                }
            }
            setLives(lives -1 )
        }

    }

    return (
        <div>
           <div className="row">
               <div className="col-6">
                   <input disabled={playAgain} value={number} onChange={playerNumberChange} type="number"/>
                   {!playAgain && <button disabled={!number} onClick={check} type="button">Proverit</button>}
                   {playAgain && <button onClick={playAgainClick} type="button">Nachat zanova</button>}
                   <span>Ostalas popytok {lives}</span>
                   <div>
                       <label>
                           <input onChange={checkedChange}  type="check"/>
                           podskazka
                       </label>
                   </div>
                   <div className="s">{message}</div>
               </div>
               <div className="col-6">
                    <div className="reiting">Player: {win} | Comp: {compWin}</div>
                   <button onClick={resetLs} type="button">ochistit</button>
               </div>
           </div>
        </div>
    );
};

export default GuessNumber;