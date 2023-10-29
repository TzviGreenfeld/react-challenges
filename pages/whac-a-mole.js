import Head from "next/head";
import styles from "../styles/WhacAMole.module.css";
import { useEffect, useState, useEffectEvent } from "react";
import ResetGame from "../components/ResetGame";
import Timer from "../components/Timer";

const mole = "/mole.png";
const hole = "/hole.png";

const getRandomMole = () => Math.floor(Math.random() * 9);

const Cell = ({ isOut, onWhack }) => {

    return (<div className={styles.cell} onClick={onWhack}>
        <img src={isOut ? mole : hole} />
    </div>);
};

export default function WhacAMole() {
    const [moles, setMoles] = useState(Array(9).fill(false));
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(true);
    const [timerKey, setTimerKey] = useState(0);


    const onResetClick = () => {
        setMoles(Array(9).fill(false));
        setScore(0);
        setGameActive(true);
        setTimerKey(k => k + 1);
    };

    const hideMole = (index) => {
        // if (moles[index]) {
        const newMoles = [...moles];
        newMoles[index] = false;
        setMoles(newMoles);
        // }
    };

    const whackMole = (index) => {
        if (!gameActive) return;
        if (moles[index]) {
            hideMole(index);
            setScore(s => s + 1);
        }
    };

    const popMole = (index) => {
        if (!moles[index]) {
            const newMoles = [...moles];
            newMoles[index] = true;
            setMoles(newMoles);
        }
    };


    useEffect(() => {
        if (!gameActive) return;
        const interval = setInterval(() => {
            const moleToPop = getRandomMole();
            popMole(moleToPop);
            setTimeout(() => {
                hideMole(moleToPop);
            }, 700);
        }, 1000);

        return () => clearInterval(interval);
    }, [gameActive, moles]);


    return (
        <>
            <Head>
                <title>Whac A Mole</title>
                <link rel="icon" type="image/svg+xml" href="/whacAMole.svg" />
            </Head>

            <main>
                <Timer
                    key={timerKey}
                    initialTimeInSeconds={20}
                    onTimerDone={() => setGameActive(false)} />
                <h1>Score: {score}</h1>
                <div className={styles.board}>
                    {moles.map((mole, index) =>
                        <Cell
                            key={index}
                            isOut={mole}
                            onWhack={() => whackMole(index)} />)}
                </div>
                <br />
                <ResetGame onClick={onResetClick} />
            </main >
        </>
    );
}
