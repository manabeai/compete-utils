import React, { useState } from "react";
import primeFactorization from "../../../utils/primeFactorization";


const Factorization = () => {
    const [number, setNumber] = useState<number>(0);
    const [factors, setFactors] = useState<number[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setNumber(value);
        }
    };

    const handleFactorize = () => {
        const result = primeFactorization(number);
        setFactors(result);
    };

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={handleChange}
                placeholder="数値を入力"
            />
            <button onClick={handleFactorize}>素因数分解</button>
            <p>素因数分解結果: {factors.length ? factors.join(", ") : "結果なし"}</p>
        </div>
    );
};

export default Factorization;
