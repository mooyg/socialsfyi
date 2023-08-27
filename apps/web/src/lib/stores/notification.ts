import { derived, writable, type Stores } from "svelte/store";

const TIMEOUT = 3000;
export type Type = "default" | "error" | "success";
type NotificationStore =
  | {
      message: string;
      timeout: number;
      type: Type;
      id: string;
      colorCode: string;
    }[]
  | [];

const id = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
export const createNotificationsStore = () => {
  const _notifications = writable<NotificationStore>([]);

  const send = (
    message: string,
    timeout: number = TIMEOUT,
    type: Type = "default",
    colorCode: string,
  ) => {
    _notifications.update((state) => {
      return [...state, { message, timeout, type, id: id(), colorCode }];
    });
  };

  const notifications = derived<Stores, NotificationStore>(
    _notifications,
    ($_notifications, set) => {
      set($_notifications);

      if ($_notifications.length > 0) {
        const timer = setTimeout(() => {
          _notifications.update((state) => {
            state.shift();
            return state;
          });
        }, $_notifications[0].timeout);
        return () => {
          clearTimeout(timer);
        };
      }
    },
  );

  return {
    subscribe: notifications.subscribe,
    send,
    default: (msg: string, timeout?: number) =>
      send(msg, timeout, "default", "#6082B6"),
    success: (msg: string, timeout?: number) =>
      send(msg, timeout, "success", "#009E60"),
    error: (msg: string, timeout?: number) =>
      send(msg, timeout, "error", "#E34234"),
  };
};

export const notifications = createNotificationsStore();
