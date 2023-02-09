import React from "react";

const keypad = ({handleClick, handleClear, handleEqual}) => {
    return(
        <div className="Keypad">
            <button className="digit-keys"
            onClick={() => handleClick("7")}>7</button>
            <button className="digit-keys"
            onClick={() => handleClear("8")}>8</button>
            <button className="digit-keys"
            onClick={() => handleEqual("9")}>9</button>
            <button className="operator-keys"
            onClick={() => handleClick("/")}>/</button>
            <br/>
            <button className="digit-keys"
            onClick={() => handleClick("4")}>4</button>
            <button className="digit-keys"
            onClick={() => handleClear("5")}>5</button>
            <button className="digit-keys"
            onClick={() => handleEqual("6")}>6</button>
            <button className="operator-keys"
            onClick={() => handleClick("*")}>*</button>
            <br/>
            <button className="digit-keys"
            onClick={() => handleClick("1")}>1</button>
            <button className="digit-keys"
            onClick={() => handleClear("2")}>2</button>
            <button className="digit-keys"
            onClick={() => handleEqual("3")}>3</button>
            <button className="operator-keys"
            onClick={() => handleClick("-")}>-</button>
            <br/>
            <button className="digit-keys bottom-left-corner"
            onClick={() => handleClick("0")}>0</button>
            <button className="fun-keys"
            onClick={handleClear}>=</button>
            <button className="fun-keys"
            onClick={handleClear}>C</button>
            <button className="operator-keys bottom-right-corner"
            onClick={() => handleClick("+")}>+</button>
        </div>
    )
}
export default keypad