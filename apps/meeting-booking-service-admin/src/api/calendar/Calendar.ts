import { Appointment } from "../appointment/Appointment";
import { User } from "../user/User";

export type Calendar = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
