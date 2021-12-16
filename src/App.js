import React, {useState} from 'react';
import Game from "./compotent/game";
import GuessNumber from "./compotent/GuessNumber";

const App = () => {
    const [game, setGame] = useState(null)
    return (
        <div>
            {
                !game && <div className="menu">
                    <button onClick={() => setGame(1)} type="button">Kamen, Nojnisa, Bymaga</button>
                    <button onClick={() => setGame(2)} type="button">ygadai chislo</button>
                </div>
            }
            {
                (game === 1)
                ? <Game />
                    : (game === 2)
                ? <GuessNumber />
                    : null
            }
        </div>
    );
};

export default App;