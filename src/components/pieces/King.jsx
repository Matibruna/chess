import React from "react";
import { NumeroALetra, LetraANumero } from "../enum/NumberLetter";
import blackKing from "./piecesImages/black-king.png";
import whiteKing from "./piecesImages/white-king.png";

export class King extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            hasBeenMoved: false
        };
    }

    getType(){
        return("king");
    }

    getNextMoves({letter, number}, pieces){

        let moves = [];

        for(let i = -1; i<2; i++){
            for(let j = -1; j<2; j++){
                if(number + i > 0 && number + i < 9 && (LetraANumero[letter] + j) < 9 && (LetraANumero[letter] + j) > 0){
                    if(!this.state.isOcuppied(NumeroALetra[(LetraANumero[letter]+j)], number+i, pieces)){
                        if(!this.state.isDefended(NumeroALetra[(LetraANumero[letter]+j)],number+i, pieces)){
                            moves.push({letter: NumeroALetra[(LetraANumero[letter]+j)], number: number+i});   
                        }
                    }else{
                        if(this.state.canTake(letter, number, NumeroALetra[(LetraANumero[letter]+j)], number+i, pieces)){
                            if(!this.state.isDefended(NumeroALetra[(LetraANumero[letter]+j)],number+i, pieces)){
                                moves.push({letter: NumeroALetra[(LetraANumero[letter]+j)], number: number+i});   
                            }
                        }
                    }
                }
            }
        }
        return moves;
    }

    render(){
        if(this.state.team === "white"){
            return(<img className="img" src={whiteKing} alt="King"/>);
        }
        return(<img className="img" src={blackKing} alt="King"/>);
    }
}