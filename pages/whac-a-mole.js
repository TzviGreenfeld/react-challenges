import Head from "next/head";
import styles from "../styles/WhacAMole.module.css";
import { useState } from "react";
import ResetGame from "../components/ResetGame";

const mole = "/mole.png";
const hole = "/hole.png";

const getRandomMole = () => Math.random() * 9;
const Cell = ({ isOut, onWhack }) => {

    return (<div className={styles.cell} onClick={onWhack}>
        <img src={isOut ? mole : hole} />
    </div>);
};

export default function WhacAMole() {
    const [moles, setMoles] = useState(Array(9).fill(false));
    const [score, setScore] = useState(0);

    const onResetClick = () => {
        setMoles(Array(9).fill(false));
        setScore(0);
    };

    const toggleMole = (index) => {
        const newMoles = [...moles];
        newMoles[index] = !newMoles[index];
        setMoles(newMoles);
    };

    const whackMole = (index) => {
        toggleMole(index);
        setScore(s => s + 1);
    };

    const popMole = (index) => {
        if (!moles[index]) {
            toggleMole(index);
        }
    };


    return (
        <>
            <Head>
                <title>Whac A Mole</title>
                <link rel="icon" type="image/svg+xml" href="/whacAMole.svg" />
            </Head>

            <main>
                <h1>Score: {score}</h1>
                <div className={styles.board}>
                    {moles.map((mole, index) =>
                        <Cell
                            key={index}
                            isOut={moles[index]}
                            onWhack={() => whackMole(index)} />)}
                </div>
                <br />
                <ResetGame onClick={onResetClick} />
            </main >
        </>
    );
}
