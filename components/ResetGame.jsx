
import styles from '../styles/ResetGame.module.css';

export default function ResetGame({ onClick }) {
    return (
        <div
            className={styles.reset}
            onClick={onClick}>
            Reset Game
        </div>
    );
}