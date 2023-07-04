import React from 'react'
import styles from './Notification.module.css'
import { NotificationProps } from '../../types/components/Notification/NotificationType';

const Notification: React.FC<NotificationProps> = ({notification: { title, text, viewCount, date }}) => {
    return (
      <div className={styles.notification}>
        <h2 className={styles.notification__title}>{title}</h2>
        <p className={styles.notification__text}>{text}</p>
        <p className={styles.notification__view}>View count: {viewCount}</p>
        <p className={styles.notification__date}>Add date: {date}</p>
      </div>
    );
  };
  
export default Notification;