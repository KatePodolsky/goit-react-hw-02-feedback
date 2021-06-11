import React from "react";
import styles from "./Statistics.module.css";

const Statistics =({good,neutral,bad,total,positivePercentage})=> (
    <ul className={styles.staticList}>
        <li className={styles.staticItem}><p> Good <span className={styles.staticData}>{good}</span></p></li>
        <li className={styles.staticItem}><p> Neutral <span className={styles.staticData}>{neutral}</span></p></li>
        <li className={styles.staticItem}><p> Bad <span className={styles.staticData}>{bad}</span></p></li>
        <li className={styles.staticItem}><p> Total <span className={styles.staticData}>{total}</span></p></li>
        <li className={styles.staticItem}><p> Positive feedback <span className={styles.staticData}>{positivePercentage}%</span></p></li>
    </ul>
)

export default Statistics;