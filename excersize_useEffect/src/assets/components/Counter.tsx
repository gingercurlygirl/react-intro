import {useState} from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>add</button>
            <h1>{count}</h1>
        </>
    )
}

export default Counter