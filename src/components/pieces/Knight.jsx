import React from "react";
import { NumeroALetra, LetraANumero } from "../enum/NumberLetter";
import blackKnight from "./piecesImages/black-knight.png";
import whiteKnight from "./piecesImages/white-knight.png";

export class Knight extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
      }

    isOnBoard(letter, number){

        if(1 <= number && number <= 8){
            if(1 <= letter && number <= 8){
                return true;
            }
        }
        return false;

    }

    getType(){
        return("knight");
    }

    getNextMoves({letter, number}, pieces){

        let moves = [];

        if(this.state.isOnBoard((LetraANumero[letter]+2), number+1) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]+2)], number+1, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]+2)], number: number+1 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]+2), number-1) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]+2)], number-1, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]+2)], number: number-1 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]-2), number+1) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]-2)], number +1, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]-2)], number: number+1 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]-2), number-1) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]-2)], number -1, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]-2)], number: number-1 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]+1), number+2) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]+1)], number +2, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]+1)], number: number+2 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]+1), number-2) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]+1)], number -2, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]+1)], number: number-2 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]-1), number+2) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]-1)], number +2, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]-1)], number: number+2 }); 
        }

        if(this.state.isOnBoard((LetraANumero[letter]-1), number-2) && this.state.ifOcuppiedEatable(letter, number, NumeroALetra[(LetraANumero[letter]-1)], number -2, pieces)){
            moves.push({ letter: NumeroALetra[(LetraANumero[letter]-1)], number: number-2 }); 
        }

        return moves;
    }

    render(){
        if(this.state.team === "white"){
            return(<img className="img" src={whiteKnight} alt="Knight"/>);
        }
        return(<img className="img" src={blackKnight} alt="Knight"/>);
    }
}