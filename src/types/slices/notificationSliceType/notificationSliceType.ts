export type Notification = {
    title: string;
    text: string;
    viewCount: number;
    date: string;
  }
  
export type NotificationState = {
    notifications: Notification[];
}