import { AppointmentCreateNestedManyWithoutCalendarsInput } from "./AppointmentCreateNestedManyWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutCalendarsInput;
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
