import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions =({options,onLeaveFeedback})=> (
        <ul className={styles.feedList}>
            {options.map((option, idx) => (
                <li key={idx} className={styles.feedItem}><button type="button" name={option} className={styles.button} onClick={onLeaveFeedback}>{option}</button></li>
        ))}
        </ul>
)

export default FeedbackOptions;