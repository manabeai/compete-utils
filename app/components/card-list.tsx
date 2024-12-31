import React from "react";
import Factorization from "./utils/factorization";
import { Card, CardProps } from "./card";

const FactorizationProps: CardProps = {
    title: "素因数分解",
    children: <Factorization />
}

const cards = [
    { id: 1, component: <Card {...FactorizationProps} /> }
];

const CardList: React.FC = () => {
    return (
        <div>
            {cards.map((util) => (
                <div key={util.id}>
                    {util.component}
                </div>
            ))}
        </div>
    );
};

export default CardList;
