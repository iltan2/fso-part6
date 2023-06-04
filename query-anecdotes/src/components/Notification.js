import { useEffect } from "react";
import {
  useNotificationValue,
  useNotificationDispatch,
} from "../NotificationContext";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };
  const dispatch = useNotificationDispatch();
  const notifValue = useNotificationValue();

  useEffect(() => {
    if (notifValue !== "") {
      setTimeout(() => {
        dispatch({ item: "" });
      }, 5000);
    }
  }, [dispatch, notifValue]);

  return <div style={style}>{notifValue}</div>;
};

export default Notification;
