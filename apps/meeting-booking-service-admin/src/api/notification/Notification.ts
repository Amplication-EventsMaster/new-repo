import { Appointment } from "../appointment/Appointment";
import { User } from "../user/User";

export type Notification = {
  appointment?: Appointment | null;
  createdAt: Date;
  id: string;
  message: string | null;
  sentTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
