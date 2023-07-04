import { createSlice } from '@reduxjs/toolkit';
import { NotificationState } from '../types/slices/notificationSliceType/notificationSliceType';

const initialState: NotificationState = {
  notifications: [
    { title: 'Заголовок 1', text: 'Уведомление 1', viewCount: 1, date: '2023-07-01' },
    { title: 'Заголовок 2', text: 'Уведомление 2', viewCount: 2,  date: '2023-07-02' },
    { title: 'Заголовок 3', text: 'Уведомление 3', viewCount: 3,  date: '2023-07-03' },
    { title: 'Заголовок 4', text: 'Уведомление 4', viewCount: 4,  date: '2023-07-04' },
    { title: 'Заголовок 5', text: 'Уведомление 5', viewCount: 5,  date: '2023-07-05' },
  ],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    removeNotification: (state) => {
      state.notifications.shift();
    },
  },
});

export const { removeNotification } = notificationSlice.actions;

export default notificationSlice