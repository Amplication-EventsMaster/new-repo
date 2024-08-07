import { AppointmentUpdateManyWithoutCalendarsInput } from "./AppointmentUpdateManyWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutCalendarsInput;
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
