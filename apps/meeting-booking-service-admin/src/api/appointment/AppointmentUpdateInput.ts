import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { NotificationUpdateManyWithoutAppointmentsInput } from "./NotificationUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  notifications?: NotificationUpdateManyWithoutAppointmentsInput;
  startTime?: Date | null;
  title?: string | null;
};
