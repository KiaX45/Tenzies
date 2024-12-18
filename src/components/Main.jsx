import Button from "./Button";
import { useState, useEffect } from "react";


const Main = () => {
    const [number, setNumber] = useState(10);
    const [winner, setWinner] = useState(number);
    const [chooseNumber, setChooseNumber] = useState(null);
    const [dice, setDice] = useState([]);


    //Funcion para generar los dados
    const generateDice = () => {
        let newDice = [];
        for (let i = 0; i < number; i++) {
            newDice.push({ id: i, number: Math.floor(Math.random() * 6) + 1, frozen: false, color: "white" });
        }
        setDice(newDice);


    }
    //Funcion en caso de que hagan click los dados
    const handleClick = (key, newNumber) => {
        if (!chooseNumber) {
            setChooseNumber(newNumber);
            changeColor(key);
            setWinner(prevWinner => prevWinner -1)
        } else if(chooseNumber == newNumber) {
            changeColor(key);    
            setWinner(prevWinner => prevWinner -1)
        } else{
            console.log("they have to be the same number")
        }

    }

    const changeColor = (key) => {
        setDice((prevDices) => prevDices.map((dice) => { return (dice.id !== key ? { ...dice } : { ...dice, color: "#59E391" }) }))
    }

    const rollDice = () => {
        setDice(prevDices => prevDices.map(dice => dice.color == "#59E391" ? {...dice} : {...dice, number:(Math.floor(Math.random()*6)+1)}))
    }


    const restart = () => {
        setWinner(number)
        setChooseNumber(null)
        generateDice()
    }

    useEffect(() => { generateDice() }, [])


    const buttons = dice.map((item) => {
        return (<Button
            key={item.id}
            id={item.id}
            number={item.number}
            color={item.color}
            frozen={item.frozen}
            onClick={handleClick}
        />)
    })

    return (
        <div className="Main">
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice">
                {buttons}
            </div>

            <button  className="roll" onClick={winner ==0 ? restart: rollDice}> {winner==0 ? "Congratulation" : "Roll"} </button>


        </div>
    );
}

export default Main;