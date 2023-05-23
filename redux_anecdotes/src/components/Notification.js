import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setNotification(""));
    }, 5000);
  }, [notification, dispatch]);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div style={notification ? style : { display: "none" }}>{notification}</div>
  );
};

export default Notification;
