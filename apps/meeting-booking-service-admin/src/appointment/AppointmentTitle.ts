import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "title";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.title?.toString() || String(record.id);
};
