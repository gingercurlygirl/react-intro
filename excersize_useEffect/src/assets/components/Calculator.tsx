import {ChangeEvent, useState} from "react";

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const calculate = (operator: string) => {
        if (operator === '+') setResult(x + y)
        else if(operator === '-') setResult(x - y)
    }

    return (
        <div>
            <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => setX(Number(e.target.value))}/>
            <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => setY(Number(e.target.value))}/>
            <button onClick={() => calculate('+')}>+</button>
            <button onClick={() => calculate('-')}>-</button>

            <p>result: {result}</p>
        </div>
    )
}

export default Calculator;