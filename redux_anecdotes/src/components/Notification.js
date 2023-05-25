import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.message);
  const timeoutSecs = useSelector((state) => state.notification.timeoutSecs);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setNotification(""));
    }, timeoutSecs * 1000);
  }, [notification, timeoutSecs, dispatch]);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{notification}</div>;
};

export default Notification;
