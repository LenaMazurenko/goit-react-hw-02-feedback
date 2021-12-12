import s from './Notification.module.css';
const Notification = ({ message }) => {
  return <p className={s.Message}>&#x261d; {message} </p>;
};
export default Notification;
