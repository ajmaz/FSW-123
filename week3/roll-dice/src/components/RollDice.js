import React, { useState } from "react";
import Die from "./Die";


const RollDice = () => {
    let sides = ["one", "two", "three", "four", "five", "six"];
    let [dice, setDice] = useState({
        one: "one",
        two: "one",
    });

    const handleChange = () => {
        let randomDieOne = sides[Math.floor(Math.random() * sides.length)];
        let randomDieTwo = sides[Math.floor(Math.random() * sides.length)];


        setDice({ one: randomDieOne, two: randomDieTwo });

    };

    return (
        <div className="rollDice">
            <Die value={dice.one} />
            <Die value={dice.two} />
            <button onClick={handleChange}>Roll Dice</button>
        </div>
    );
};

export default RollDice;