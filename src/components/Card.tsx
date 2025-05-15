import React, {FC, useState} from "react";
import styles from "./Card.module.css"

export enum CardVariant {
    outlined= 'outlined',
    primary = 'primery',
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;
    onClick: (arg: number) => void;
}

const Card: FC<CardProps> = ({width, height, children, variant, onClick}) => {

    const [count, setCount] = useState(0);

    return (
        <div 
            className={styles.card} 
            style={{width, height,
            background: variant === CardVariant.primary ? 'lightgray' : 'none', border: variant === CardVariant.outlined ? '1px solid grey' : 'none'}} 
            onClick={() => {
                onClick(count);
                setCount(count + 1);
            }}
        >
            {children}
            {count}
        </div>
    )
}

export default Card;