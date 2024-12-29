import React from "react";
import Factorization from "./utils/factorization";
import { CardFrame, CardFrameProps } from "./util-card-frame";

const FactorizationProps: CardFrameProps = {
    title: "素因数分解",
    children: <Factorization />
}

const utilList = [
    { id: 1, component: <CardFrame {...FactorizationProps} /> }
];

const UtilList: React.FC = () => {
    return (
        <div>
            {utilList.map((util) => (
                <div key={util.id}>
                    {util.component}
                </div>
            ))}
        </div>
    );
};

export default UtilList;
