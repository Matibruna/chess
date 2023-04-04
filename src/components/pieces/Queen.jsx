import React from "react";
import { Rook } from "./Rook";
import { Bishop } from "./Bishop";
import { NumeroALetra, LetraANumero } from "../enum/NumberLetter";
import blackQueen from "./piecesImages/black-queen.png";
import whiteQueen from "./piecesImages/white-queen.png";

export class Queen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    getNextMoves({letter, number}, pieces){
        var rook = new Rook({isOcuppied: this.state.isOcuppied, canTake: this.state.canTake});
        var bishop = new Bishop({isOcuppied: this.state.isOcuppied, canTake: this.state.canTake});

        let movesRook = rook.getNextMoves({letter, number}, pieces);
        let movesBishop = bishop.getNextMoves({letter, number}, pieces);

        return [...movesRook, ...movesBishop];
    }

    inLineWithTheKing(kLet, kNum, rLet, rNum){
        if(kLet == rLet || kNum == rNum){
            return true;
        }else{
                return (Math.abs(LetraANumero[kLet]-LetraANumero[rLet]) == Math.abs(kNum-rNum));    
        }
    }

    render(){
        if(this.state.team === "white"){
            return(<img className="img" src={whiteQueen} alt="Queen"/>);
        }
        return(<img className="img" src={blackQueen} alt="Queen"/>);
    }
}