import React, {useState} from "react";
import ChessBoard from "../board/ChessBoard";
import "./ChessGame.css";

export function ChessGame(){

    const [showBoard, setShowBoard] = useState(false);
    const [turn, setTurn] = useState("white");
    const [selected, setSelected] = useState({number: undefined, letter: undefined});
    const [movements, setMovements] = useState([]);

    const initGame = () => {
        setShowBoard(true);
    }

    const goMenu = () => {
        setShowBoard(false);
    }

    const movePiece = (square) => {
        setSelected(square);
        setTurn(nextTurn(turn));
    }

    function nextTurn(turn){
        if(turn === "white"){
            return "black";
        }
        return "white";
    }

    const [Board, setInitialState] = ChessBoard({selected, setSelected, movePiece, turn, movements, setMovements});

    const reiniciar = () => {setInitialState(); setTurn("white");}
    return(
        !showBoard ?
        <div className="startGame">
            <h1>Iniciar partida:</h1>
            <h3>Aclaración:</h3>
            <p>Esta version de chess estaba pensado para ser simple por lo que algunos conceptos como los Jaques o Capturas al paso (En Passant) no estan analizados en profundidad.</p>

            <button className="gameBtn" onClick={initGame}>Iniciar</button>
        </div>
        :
        <div>
            {
                Board                
            }
            <div>Turno de las {turn === "white" ? "blancas." : "negras."}</div>
            <button className="gameBtn" onClick={goMenu}>Volver al menú</button>
            <button className="gameBtn" onClick={reiniciar}>Reiniciar partida</button>
        </div>
    )
}