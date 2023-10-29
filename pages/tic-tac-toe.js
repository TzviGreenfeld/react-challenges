import { useState } from "react";
import styles from '../styles/TicTacToe.module.css';

const hasWinner = (board) => {
    // Helper function to check if three cells are equal and not null
    const checkLine = (a, b, c) => {
        return (board[a] === board[b]) && (board[b] === board[c]) && (board[a] !== null);
    };

    // Check rows
    for (let i = 0; i < 9; i += 3) {
        if (checkLine(i, i + 1, i + 2)) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (checkLine(i, i + 3, i + 6)) {
            return true;
        }
    }

    // Check diagonals
    if (checkLine(0, 4, 8) || checkLine(2, 4, 6)) {
        return true;
    }

    // No winner found
    return false;
};

const Cell = ({ value, cellClick }) => {
    const hasValue = value !== null;
    const onCellClick = () => hasValue ? {} : cellClick();
    return <div
        className={`${styles.cell} ${hasValue ? '' : styles.clickable}`}
        onClick={onCellClick}
    >
        {value}
    </div>;
};

const Board = ({ board, cellClick }) => {

    return (
        <>
            <div className={styles.board}>
                {board.map((item, index) => <Cell value={item} cellClick={() => cellClick(index)} />)}
            </div>
        </>
    );
};

const Game = () => {
    const [isXTurn, setIsXTurn] = useState(true);
    const [board, setBoard] = useState(Array(9).fill(null));

    const isTie = !board.filter(i => i === null).length && !hasWinner(board);

    const onCellClick = (index) => {
        if (hasWinner(board)) {
            return;
        }
        const nextValue = isXTurn ? 'X' : 'O';
        const newBoard = [...board];
        newBoard[index] = nextValue;
        setBoard(newBoard);
        setIsXTurn(t => !t);
    };

    const onResetClick = () => {
        setIsXTurn(true);
        setBoard(Array(9).fill(null));
    };

    return (<>
        {isTie ?
            <h1 className={styles.title}>It's A Tie</h1> :
            hasWinner(board) ?
                <h1 className={styles.title}>{`Player ${!isXTurn ? 'X' : 'O'} Won!`}</h1> :
                <h1 className={styles.title}>{`Player: ${isXTurn ? 'X' : 'O'}`}</h1>
        }

        <Board board={board} cellClick={onCellClick}></Board>
        <br />
        <div
            className={styles.reset}
            onClick={onResetClick}>Reset Game</div>
    </>);
};



export default function TicTacToe() {
    return (
        <main>
            <Game />
        </main>
    );
}
