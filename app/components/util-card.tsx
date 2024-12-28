type CardProps = {
    children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", margin: "16px", borderRadius: "8px" }}>
            {children}
        </div>
    );
};

export default Card;