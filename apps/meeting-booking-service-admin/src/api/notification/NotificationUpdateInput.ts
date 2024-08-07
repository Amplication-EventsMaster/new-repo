import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  message?: string | null;
  sentTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
