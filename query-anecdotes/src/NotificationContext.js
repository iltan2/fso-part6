import { useContext, useReducer, createContext } from "react";

const notifReducer = (state, action) => {
  return action.item;
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notif, notifDispatch] = useReducer(notifReducer, "");

  return (
    <NotificationContext.Provider value={[notif, notifDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotificationValue = () => {
  const notifAndDispatch = useContext(NotificationContext);
  return notifAndDispatch[0];
};

export const useNotificationDispatch = () => {
  const notifAndDispatch = useContext(NotificationContext);
  return notifAndDispatch[1];
};

export default NotificationContext;
