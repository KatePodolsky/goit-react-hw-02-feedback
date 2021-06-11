import React from "react";

const FeedbackOptions =({options,onLeaveFeedback})=> (
        <ul>
            {options.map((option, idx) => (
                <li key={idx}><button type="button" name={option} onClick={onLeaveFeedback}>{option}</button></li>
        ))}
        </ul>
)

export default FeedbackOptions;