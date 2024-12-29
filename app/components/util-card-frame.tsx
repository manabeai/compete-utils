import React from "react";
export type CardFrameProps = {
    title: string;
    children: React.ReactNode;
};

export const CardFrame = ({ title, children }: CardFrameProps) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", margin: "16px", borderRadius: "8px" }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};
