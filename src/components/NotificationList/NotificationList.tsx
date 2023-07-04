import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { removeNotification } from "../../store/notificationSlice";
import Notification from "../Notification/Notification";
import { RootState } from "../../store/store";

const NotificationList: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notification.notifications);

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        dispatch(removeNotification());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [dispatch, notifications]);

  const firstNotification = notifications[0]

  return (
    firstNotification && <Notification key={uuidv4()} notification={firstNotification} />
  );
};

export default NotificationList;