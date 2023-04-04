import React from "react";
import { NumeroALetra, LetraANumero } from "../enum/NumberLetter";
import blackPawn from "./piecesImages/black-pawn.png";
import whitePawn from "./piecesImages/white-pawn.png";

export class WhitePawn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    getNextMoves({letter, number}, pieces){
        let moves = [];

        if(this.state.isOcuppied(NumeroALetra[(LetraANumero[letter]+1)], number+1, pieces)){
            if(this.state.canTake(letter, number, NumeroALetra[(LetraANumero[letter]+1)], number+1, pieces)){
                moves.push({letter: NumeroALetra[(LetraANumero[letter]+1)], number: number+1});
            }
        }

        if(this.state.isOcuppied(NumeroALetra[(LetraANumero[letter]-1)], number+1, pieces)){
            if(this.state.canTake(letter, number, NumeroALetra[(LetraANumero[letter]-1)], number+1, pieces)){
                moves.push({letter: NumeroALetra[(LetraANumero[letter]-1)], number: number+1});
            }
        }

        if(number === 2) {
            if(this.state.isOcuppied(letter, number+1, pieces)){
                return [];
            }
            else{
                if(this.state.isOcuppied(letter, number+2, pieces)){
                    moves.push({letter: letter, number: number+1});
                }
                else{
                    moves.push({letter: letter, number: number+1});
                    moves.push({letter: letter, number: number+2});
                }
            }
        }else{
            if(! this.state.isOcuppied(letter, number+1, pieces)){
                moves.push({letter: letter, number: number+1});
            }
        }

        return moves;
    }

    setPosition(position){
        this.setState({ ...this.state, position: position});
    }

    render(){
        return(<img className="img" src={whitePawn} alt="W.Pawn"/>);
    }
}

export class BlackPawn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    getType(){
        return("pawn");
    }

    getNextMoves({letter, number}, pieces){
        let moves = [];
        
        if(this.state.isOcuppied(NumeroALetra[(LetraANumero[letter]+1)], number-1, pieces)){
            if(this.state.canTake(letter, number, NumeroALetra[(LetraANumero[letter]+1)], number-1, pieces)){
                moves.push({letter: NumeroALetra[(LetraANumero[letter]+1)], number: number-1});
            }
        }

        if(this.state.isOcuppied(NumeroALetra[(LetraANumero[letter]-1)], number-1, pieces)){
            if(this.state.canTake(letter, number, NumeroALetra[(LetraANumero[letter]-1)], number-1, pieces)){
                moves.push({letter: NumeroALetra[(LetraANumero[letter]-1)], number: number-1});
            }
        }

        if(number === 7) {
            if(this.state.isOcuppied(letter, number-1, pieces)){
                return [];
            }
            else{
                if(this.state.isOcuppied(letter, number-2, pieces)){
                    moves.push({letter: letter, number: number-1});
                }
                else{
                    moves.push({letter: letter, number: number-1});
                    moves.push({letter: letter, number:number-2});
                }
            }
        }else{
            if(! this.state.isOcuppied(letter, number-1, pieces)){
                moves.push({letter: letter, number: number-1});
            }
        }

        return moves;
    }

    setPosition(position){
        this.setState({position});
    }

    render(){
        return(<img className="img" src={blackPawn} alt="B.Pawn"/>);
    }
}