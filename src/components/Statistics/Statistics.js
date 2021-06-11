import React from "react";

const Statistics =({good,neutral,bad,total,positivePercentage})=> (
    <ul>
        <li><p><span>Good</span> {good}</p></li>
        <li><p><span>Neutral</span> {neutral}</p></li>
        <li><p><span>Bad</span> {bad}</p></li>
        <li><p><span>Total</span> {total}</p></li>
        <li><p><span>Positive feedback</span> {positivePercentage}%</p></li>
    </ul>
)

export default Statistics;