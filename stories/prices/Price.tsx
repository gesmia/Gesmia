import React from "react"
import { Button } from "../button/Button";
import './price.css'

interface PriceProps {
    type: string;
    value: number;
    label: string;
    buttonLabel: string;
    items: string[];
}
export const Price = ({ type, value, label, buttonLabel, items }: PriceProps) => (
    <div className="priceBox">
        <div className="value">
            <span>{type}</span>
            <h3>${value}</h3>
            <label htmlFor="">{label}</label>
            <Button label={buttonLabel} />
        </div>

        <div className="divider">
        </div>
        
        <div className="items">
            {
                items.map((item: string, key: number) => (
                    <p key={key}>{item}</p>
                ))
            }
        </div>
    </div>
)