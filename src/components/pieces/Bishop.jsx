import React from "react";
import { NumeroALetra, LetraANumero } from "../enum/NumberLetter";
import blackBishop from "./piecesImages/black-bishop.png";
import whiteBishop from "./piecesImages/white-bishop.png";

export class Bishop extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    getType(){
        return("bishop");
    }

    getNextMoves({letter, number}, pieces){
        let moves = [];

        let letToNum = LetraANumero[letter];
        let numero = number;

        while( letToNum < 8 && numero < 8){
            letToNum++;
            numero++;
            if(this.state.isOcuppied(NumeroALetra[letToNum], numero, pieces, pieces)){
                if(this.state.canTake(NumeroALetra[letToNum],numero, letter, number, pieces, pieces)){
                    moves.push({letter: NumeroALetra[letToNum], number: numero});                  
                }
                break;    
            }
            else{
                moves.push({letter: NumeroALetra[letToNum], number: numero});
            }
        }  
        letToNum = LetraANumero[letter];
        numero = number;

        while( letToNum < 8 && numero > 1){
            letToNum++;
            numero--;
            if(this.state.isOcuppied(NumeroALetra[letToNum], numero, pieces)){
                if(this.state.canTake(NumeroALetra[letToNum],numero, letter, number, pieces)){
                    moves.push({letter: NumeroALetra[letToNum], number: numero});                  
                }
                break;    
            }
            else{
                moves.push({letter: NumeroALetra[letToNum], number: numero});
            }
        }
        letToNum = LetraANumero[letter];
        numero = number;

        while( letToNum > 1 && numero < 8){
            letToNum--;
            numero++;
            if(this.state.isOcuppied(NumeroALetra[letToNum], numero, pieces)){
                if(this.state.canTake(NumeroALetra[letToNum],numero, letter, number, pieces)){
                    moves.push({letter: NumeroALetra[letToNum], number: numero});                     
                }
                break;    
            }
            else{
                moves.push({letter: NumeroALetra[letToNum], number: numero});
            }
        }
        letToNum = LetraANumero[letter];
        numero = number;

        while( letToNum > 1 && numero > 1){
            letToNum--;
            numero--;
            if(this.state.isOcuppied(NumeroALetra[letToNum], numero, pieces)){
                if(this.state.canTake(NumeroALetra[letToNum],numero, letter, number, pieces)){    
                    moves.push({letter: NumeroALetra[letToNum], number: numero});                  
                }
                break;
            }
            else{
                moves.push({letter: NumeroALetra[letToNum], number: numero});
            }
        }
        return moves;
    }

    inLineWithTheKing(kLet, kNum, bLet, bNum){
        return (Math.abs(LetraANumero[kLet]-LetraANumero[bLet]) == Math.abs(kNum-bNum));
    }

    render(){
        if(this.state.team === "white"){
            return(<img className="img" src={whiteBishop} alt="Bishop"/>);
        }
        return(<img className="img" src={blackBishop} alt="Bishop"/>);
    }
}