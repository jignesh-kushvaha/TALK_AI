import { notification } from "antd";

export const notifyError = (message, description = "") => {
  notification.error({
    message,
    description,
    placement: "topRight",
  });
};
