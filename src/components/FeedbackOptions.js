import React from 'react';
import s from './FeedbackOptions.module.css';
const Feedbackoptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.BoxBtn}>
      <button
        key={'good'}
        type="button"
        className={s.FeedBackBtn}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        key={'neutral'}
        type="button"
        className={s.FeedBackBtn}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        key={'bad'}
        type="button"
        className={s.FeedBackBtn}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};
export default Feedbackoptions;
