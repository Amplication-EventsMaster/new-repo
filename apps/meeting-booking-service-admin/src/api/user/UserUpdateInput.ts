import { CalendarUpdateManyWithoutUsersInput } from "./CalendarUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  calendars?: CalendarUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
