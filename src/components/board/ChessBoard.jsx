import React, {useEffect, useState} from "react";
import "./ChessBoard.css";
import { RowStartsBlack, RowStartsWhite } from "./Row";
import { King } from "../pieces/King";
import { Rook } from "../pieces/Rook";
import { Queen } from "../pieces/Queen";
import { Knight } from "../pieces/Knight";
import { Bishop } from "../pieces/Bishop";
import { BlackPawn, WhitePawn } from "../pieces/Pawn";

export default function ChessBoard({selected, setSelected, movePiece, turn, movements, setMovements}){

    const notSelected = {number: undefined, letter: undefined};

    const [pieces, setPieces] = useState([]);

    const addPiece = (newPieces) => {
        setPieces([...pieces, ...newPieces]);
    }

    const movementsHandler = {movements};

    const selectSquare = (square) => {
        const pieceFromSquare = getPieceFromSquare(square, pieces);

        if(selected.letter === square.letter && selected.number === square.number){
            if(pieceFromSquare !== undefined && pieceFromSquare.state.team !== turn){
                return;
            }
            setSelected(notSelected);
            setMovements([]);
        }else{
            if(movements.filter((movement)=>movement.letter === square.letter && movement.number === square.number).length === 1){
                const piece = getPieceFromSquare(selected, pieces);

                piece.state.position.letter = square.letter;
                piece.state.position.number = square.number;

                if(pieceFromSquare !== undefined){
                    const index = pieces.indexOf(pieceFromSquare);
                    pieces.splice(index, 1);
                }

                setMovements([]);
                movePiece(notSelected);
            }else{
                if(pieceFromSquare !== undefined && pieceFromSquare.state.team !== turn){
                    return;
                }
                const piece = getPieceFromSquare(square, pieces);
                setMovements(piece ? piece.getNextMoves(square, pieces) : []);
                setSelected(square);
            }
        }
    }

    const selectionHandler = {selected, selectSquare};

    const RowA = RowStartsBlack;
    const RowC = RowStartsBlack;
    const RowE = RowStartsBlack;
    const RowG = RowStartsBlack;

    const RowB = RowStartsWhite;
    const RowD = RowStartsWhite;
    const RowF = RowStartsWhite;
    const RowH = RowStartsWhite;

    function canTake(letter1, num1, letter2, num2, piecesOnBoard){
        const piece1 = getPieceFromSquare({letter: letter1, number: num1}, piecesOnBoard);
        const piece2 = getPieceFromSquare({letter: letter2, number: num2}, piecesOnBoard);
        return piece1.state.team !== piece2.state.team;
    }
    
    function isOcuppied(letter, number, piecesOnBoard){
        return getPieceFromSquare({letter, number}, piecesOnBoard) !== undefined;
    }

    function ifOcuppiedEatable(letter1, num1, letter2, num2, piecesOnBoard){
        if(isOcuppied(letter2, num2, piecesOnBoard)){
            return canTake(letter1, num1, letter2, num2, piecesOnBoard);
        }else{
            return true;
        }
    }

    function isDefended(){
        return false;
    }

    function isOnBoard(letter, number){
        if(number > 8 || number < 1){
            return false;
        }
        if(letter > 8 || letter < 1){
            return false;
        }
        return true;
    }
    
    function getPieceFromSquare(square, piecesOnBoard){
        const filter = piecesOnBoard.filter(piece => piece.state.position.letter === square.letter && piece.state.position.number === square.number);
        return filter.length >= 1 ? filter[0] : undefined;
    }

    const addKnight = () => {
        addPiece([new Knight({position: {letter: "C", number: 3}, ifOcuppiedEatable, isOcuppied})]);
    }

    const setInitialState = () => {
        setMovements([]);
        setSelected(notSelected);
        setPieces([
        new WhitePawn({position: {letter: "A", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "B", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "C", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "D", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "E", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "F", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "G", number: 2}, team: "white", isOcuppied, canTake}),
        new WhitePawn({position: {letter: "H", number: 2}, team: "white", isOcuppied, canTake}),
        new Rook({position: {letter: "A", number: 1}, team: "white", isOcuppied, canTake}),
        new Knight({position: {letter: "B", number: 1}, team: "white", isOnBoard, ifOcuppiedEatable}),
        new Bishop({position: {letter: "C", number: 1}, team: "white", isOcuppied, canTake}),
        new Queen({position: {letter: "D", number: 1}, team: "white", isOcuppied, canTake}),
        new King({position: {letter: "E", number: 1}, team: "white", isOcuppied, isDefended, canTake}),
        new Bishop({position: {letter: "F", number: 1}, team: "white", isOcuppied, canTake}),
        new Knight({position: {letter: "G", number: 1}, team: "white", isOnBoard, ifOcuppiedEatable}),
        new Rook({position: {letter: "H", number: 1}, team: "white", isOcuppied, canTake}),

        
        new BlackPawn({position: {letter: "A", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "B", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "C", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "D", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "E", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "F", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "G", number: 7}, team: "black", isOcuppied, canTake}),
        new BlackPawn({position: {letter: "H", number: 7}, team: "black", isOcuppied, canTake}),
        new Rook({position: {letter: "A", number: 8}, team: "black", isOcuppied, canTake}),
        new Knight({position: {letter: "B", number: 8}, team: "black", isOnBoard, ifOcuppiedEatable}),
        new Bishop({position: {letter: "C", number: 8}, team: "black", isOcuppied, canTake}),
        new Queen({position: {letter: "D", number: 8}, team: "black", isOcuppied, canTake}),
        new King({position: {letter: "E", number: 8}, team: "black", isOcuppied, isDefended, canTake}),
        new Bishop({position: {letter: "F", number: 8}, team: "black", isOcuppied, canTake}),
        new Knight({position: {letter: "G", number: 8}, team: "black", isOnBoard, ifOcuppiedEatable}),
        new Rook({position: {letter: "H", number: 8}, team: "black", isOcuppied, canTake})]);
    }

    useEffect(()=>{
        setInitialState();
    }, []);

    return([
        <div className="container">
            <div className="board flex border">
                <RowA id="A" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowB id="B" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowC id="C" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowD id="D" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowE id="E" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowF id="F" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowG id="G" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
                <RowH id="H" selectionHandler={selectionHandler} movementsHandler={movementsHandler} isOcuppied={isOcuppied} canTake={canTake} ifOcuppiedEatable={ifOcuppiedEatable} pieces={pieces} />
            </div>
        </div>,
        setInitialState
    ])
}