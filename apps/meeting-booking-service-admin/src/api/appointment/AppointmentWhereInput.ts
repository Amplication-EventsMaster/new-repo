import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type AppointmentWhereInput = {
  calendar?: CalendarWhereUniqueInput;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
