import React from "react";
import Card from "./util-card";
type CardFrameProps = {
    title: string;
    children: React.ReactNode;
};

const CardFrame = ({ title, children }: CardFrameProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>{title}</h3>
            <Card>{children}</Card>
        </div>
    );
};

export default CardFrame;