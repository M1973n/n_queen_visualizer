import React from 'react';
import './Cell.css';
import whiteQueen from "../../assets/white-queen.svg";
import blackQueen from "../../assets/black-queen.svg";

type CellProps = {
    index: number;
    value: number;
}

enum CellColor {
    BLACK,
    WHITE
}

const Cell: React.FC<CellProps> = ({ index, value }) => {
    const getCellColor = (): CellColor => {
        const isEvenRow = Math.floor(index / 10) % 2 === 0;
        const isEvenCell = index % 2 === 0;
        return isEvenRow ? (isEvenCell ? CellColor.BLACK : CellColor.WHITE) : (isEvenCell ? CellColor.WHITE : CellColor.BLACK);
    }

    const getQueen = (): string => {
        return getCellColor() === CellColor.WHITE ? whiteQueen : blackQueen;
    }

    const getCellValue = (): JSX.Element | null => {
        return value === 1 ? <img src={getQueen()} alt="queen" /> : null;
    }

    const getCellBackgroundColor = (): string => {
        return getCellColor() === CellColor.WHITE ? 'var(--light-background-color)' : 'var(--dark-background-color)';
    }

    return (
        <div
            className="cell"
            style={{ backgroundColor: getCellBackgroundColor() }}
        >
            <div className="queen">
                {getCellValue()}
            </div>
        </div>
    );
}

export default Cell;
