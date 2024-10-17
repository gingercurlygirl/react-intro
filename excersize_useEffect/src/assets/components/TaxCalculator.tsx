import {SyntheticEvent, useEffect, useState} from "react";

const TaxCalculator = () => {
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(price * 1.25);
    }, [price]);

    const calculateTax = (event: SyntheticEvent) => {
        setPrice(Number(event.target.value))
    }
    return(
        <>
            <input type="number" onChange={calculateTax}/>
            <p>price before tax: {price}</p>
            <p>price with tax: {totalPrice}</p>
        </>

    )
}
export default TaxCalculator;