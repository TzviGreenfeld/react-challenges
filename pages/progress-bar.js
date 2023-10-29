import Head from "next/head";
import styles from '../styles/ProgressBar.module.css';
import { useState } from "react";

const Bar = ({ percentage }) => {
    const color = 'var(--primary-color)';
    // const color = 'rgba(0, 200, 0, 0.4)';
    const barStyle = {
        background: `linear-gradient(to right, ${color}  ${percentage}%, transparent ${percentage}%)`
    };

    return <div style={barStyle} className={styles.bar} />;
};


export default function ProgressBar() {
    const [percentage, serPercentage] = useState(0);
    return (
        <>
            <Head>
                <title>Progress Bar</title>
                <link rel="icon" type="image/svg+xml" href="/progressBar.svg" />
            </Head>

            <main>
                <div className={styles.row}>
                    <label className={styles.label}>Input Percentage:</label>
                    <input
                        className={styles.percentage}
                        type="number"
                        value={percentage}
                        onChange={(e) => serPercentage(e.target.value)}
                        min="0"
                        max="100"
                        step="5" />
                </div>
                <br />
                <Bar percentage={percentage} />
            </main >
        </>
    );
};