import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.container}>
      <p className={styles.feedRow}>Good: {feedback.good}</p>
      <p className={styles.feedRow}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedRow}>Bad: {feedback.bad}</p>
      <p className={styles.feedRow}>Total: {totalFeedback}</p>
      <p className={styles.feedRow}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
