import React from "react";
import './Square.css';

export default function Square(props){

    const letter = props.letter;
    const number = props.number;
    const filter = props.pieces.filter(piece => piece.state.position.letter === letter && piece.state.position.number === number);
    const piece = filter.length >= 1 ? filter[0] : undefined;
    const selected = props.selectionHandler.selected?.letter === letter && props.selectionHandler.selected?.number === number;
    const color = selected ? `selected${props.color}` : props.color;

    const isMovementAvailable = props.movementHandler.movements.filter(el => el.letter === letter && el.number === number).length === 1;
    const movementAvailable = selected ? " " : isMovementAvailable ? "movementAvailable" : "";

    const selectSquare = () => {
        props.selectionHandler.selectSquare({letter: props.letter, number: props.number});
    }

    return(
        <div className={`square ${color}`} onClick={selectSquare}>
            {movementAvailable && <div className={movementAvailable}></div>}
            {
                piece?.render()
            }
        </div>
    )
}