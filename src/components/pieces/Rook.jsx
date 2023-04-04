import React from "react";
import { NumeroALetra, LetraANumero } from "../enum/NumberLetter";
import blackRook from "./piecesImages/black-rook.png";
import whiteRook from "./piecesImages/white-rook.png";

export class Rook extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            hasBeenMoved: false,
        };
    }

    getType(){
        return("rook");
    }

    getNextMoves({letter, number}, pieces){
        
        var moves = [];

        if(number < 8){
            for(let i = number+1; i <= 8; i++){
                if(this.state.isOcuppied(letter, i, pieces)){
                    if(this.state.canTake(letter,number, letter, i, pieces)){
                        moves.push({letter, number: i});                  
                    }
                    break;    
                }
                else{
                    moves.push({letter, number: i});
                }
            }
        }

        if(number > 0){
            for(let i = number-1; i > 0; i--){
                if(this.state.isOcuppied(letter, i, pieces)){
                    if(this.state.canTake(letter,number, letter, i, pieces)){
                        moves.push({letter, number: i});                  
                    }
                    break;    
                }
                else{
                    moves.push({letter, number: i});
                }
            }
        }

        if(LetraANumero[letter] <= 8){
            for(let i = LetraANumero[letter]+1; i <= 8; i++){
                if(this.state.isOcuppied(NumeroALetra[i], number, pieces)){
                    if(this.state.canTake(letter,number, NumeroALetra[i], number, pieces)){
                        moves.push({letter: NumeroALetra[i], number: number});                  
                    }
                    break;    
                }
                else{
                    moves.push({letter: NumeroALetra[i], number: number});
                }
            }
        }

        if(LetraANumero[letter] > 0){
            for(let i = LetraANumero[letter]-1; i > 0; i--){
                if(this.state.isOcuppied(NumeroALetra[i], number, pieces)){
                    if(this.state.canTake(letter,number, NumeroALetra[i], number, pieces)){
                        moves.push({letter: NumeroALetra[i], number: number});                  
                    }
                    break;    
                }
                else{
                    moves.push({letter: NumeroALetra[i], number: number});
                }
            }
        }
        return moves;
    }

    inLineWithTheKing(kLet, kNum, rLet, rNum){
        if(kLet == rLet || kNum == rNum){
            return true;
        }
        return false;
    }

    render(){
        if(this.state.team === "white"){
            return(<img className="img" src={whiteRook} alt="Rook"/>);
        }
        return(<img className="img" src={blackRook} alt="Rook"/>);
    }
}