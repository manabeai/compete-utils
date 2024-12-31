import React from "react";
export type CardProps = {
    title: string;
    children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
    return (
        <div className="aspect-w-4 aspect-h-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
            <div className="flex flex-col justify-between h-full">{children}</div>
        </div>
    );
};