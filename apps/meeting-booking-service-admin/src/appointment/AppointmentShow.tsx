import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "./AppointmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CALENDAR_TITLE_FIELD } from "../calendar/CalendarTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="calendar"
          source="calendar.id"
          reference="Calendar"
        >
          <TextField source={CALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="startTime" source="startTime" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="appointmentId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="appointment"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <TextField label="sentTime" source="sentTime" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
