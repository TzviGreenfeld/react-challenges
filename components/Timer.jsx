import { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';


export default function Timer({ initialTimeInSeconds, onTimerDone }) {
    const [time, setTime] = useState(initialTimeInSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime(t => t - 1);
            } else {
                onTimerDone();
                clearInterval(interval);
            }
        }, 1000);

        return () => interval && clearInterval(interval);
    }, [time]);



    return <div className={`${styles.container} ${time < 4 && styles.lastSeconds}`}>00:{time}</div>;
}