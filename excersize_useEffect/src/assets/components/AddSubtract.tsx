import {useState} from "react";

const AddSubtract = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <button onClick={() => setValue(value + 1)}>+</button>
            <button onClick={() => setValue(value - 1)}>-</button>
            <h1>{value}</h1>
        </div>
    )
}

export default AddSubtract;