import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sentTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
