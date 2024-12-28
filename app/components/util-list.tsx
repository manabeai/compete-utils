// components/UtilList.tsx
import React from "react";
import Factorization from "./utils/factorization";

// Utilコンポーネントのリスト
const utilComponents = [
    { id: 1, component: <Factorization /> }
];

const UtilList = () => {
    return (
        <div>
            {utilComponents.map((util) => (
                <div key={util.id}>
                    {util.component}
                </div>
            ))}
        </div>
    );
};

export default UtilList;
