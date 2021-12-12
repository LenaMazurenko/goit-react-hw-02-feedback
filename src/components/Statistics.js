import React from 'react';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.FeedbackList}>
      <li>&#128522; Goog: {good}</li>
      <li>&#x1f610; Neutral: {neutral}</li>
      <li>&#128530; Bad: {bad}</li>
      <li>➪ Total: {total}</li>
      <li>➪ Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistics;
