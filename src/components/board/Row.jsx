import React from "react";
import Square from "./Square";

const colorBlack = {color: "black"};
const colorWhite = {color: "white"};

export const RowStartsBlack = ({id, selectionHandler, movementsHandler, pieces}) => {
    
    const [rowId] = React.useState(id);

    return(
        <div className="boardCol">
            <Square {...colorBlack} letter={rowId} number={8} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={7} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={6} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={5} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={4} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={3} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={2} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={1} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
        </div>
    )
}

export const RowStartsWhite = ({id, selectionHandler, movementsHandler, pieces}) => {
    
    const [rowId] = React.useState(id);

    return(
        <div className="boardCol">
            <Square {...colorWhite} letter={rowId} number={8} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={7} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={6} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={5} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={4} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={3} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorWhite} letter={rowId} number={2} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
            <Square {...colorBlack} letter={rowId} number={1} selectionHandler={selectionHandler} movementHandler={movementsHandler} pieces={pieces} />
        </div>
    )
}