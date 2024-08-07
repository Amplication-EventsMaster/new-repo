import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { NotificationCreateNestedManyWithoutAppointmentsInput } from "./NotificationCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  notifications?: NotificationCreateNestedManyWithoutAppointmentsInput;
  startTime?: Date | null;
  title?: string | null;
};
