import { useEffect, useState } from 'react';
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
        const interval = setInterval(() => {
            setCurrentLight(light => getNextLight(light));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const isOn = (light) => light === currentLight;
    return (
        <main>
            <div className={styles.lightsContainer}>
                <Light color="red" isOn={isOn('red')} />
                <Light color="yellow" isOn={isOn('yellow')} />
                <Light color="green" isOn={isOn('green')} />
            </div>
            <div className={styles.pole} />
        </main >
    );
}
