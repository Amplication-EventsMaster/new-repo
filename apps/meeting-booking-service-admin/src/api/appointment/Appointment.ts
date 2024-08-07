import { Calendar } from "../calendar/Calendar";
import { Notification } from "../notification/Notification";

export type Appointment = {
  calendar?: Calendar | null;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  notifications?: Array<Notification>;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
};
