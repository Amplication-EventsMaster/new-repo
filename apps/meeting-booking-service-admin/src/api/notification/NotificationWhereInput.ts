import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  sentTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
