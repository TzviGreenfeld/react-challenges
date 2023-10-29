import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/TrafficLight.module.css';

const getNextLight = (currentLight) => {
    const lights = ['red', 'green', 'yellow'];
    const currentIndex = lights.indexOf(currentLight);
    return lights[(currentIndex + 1) % 3];
};


const Light = ({ color, isOn }) => {

    return <div className={`${styles.light} ${styles[color]} ${!isOn && styles.off}`} />;
};

export default function TrafficLight() {
    const [currentLight, setCurrentLight] = useState('red');

    useEffect(() => {
        const durations = { red: 4000, green: 3000, yellow: 1000 };

        const interval = setInterval(() => {
            setCurrentLight(light => getNextLight(light));

        }, durations[currentLight]);

        return () => clearInterval(interval);
    }, [currentLight]);

    const isOn = (light) => light === currentLight;

    return (
        <>
            <Head>
                <title>TrafficLight</title>
                <link rel="icon" type="image/svg+xml" href="/trafficLight.svg" />
            </Head>

            <main>
                <div className={styles.lightsContainer}>
                    <Light color="red" isOn={isOn('red')} />
                    <Light color="yellow" isOn={isOn('yellow')} />
                    <Light color="green" isOn={isOn('green')} />
                </div>
                <div className={styles.pole} />
            </main >
        </>
    );
}
