import {SyntheticEvent, useEffect, useState} from "react";

const Fibonacci = () => {
    const [current, setCurrent] = useState(1);
    const [previous1, setPrevious1] = useState(1);
    const [previous2, setPrevious2] = useState(0);

    useEffect(() => {
        setPrevious2(previous1);
        setPrevious1(current)
    }, [current])

    const handleClick = (event: SyntheticEvent) => {
        setCurrent(previous1 + previous2);
    }

    return (
        <>
            <h1>fibonacci</h1>
            <button onClick={handleClick}>add</button>
            <p>{current}</p>
        </>
    )
}

export default Fibonacci;