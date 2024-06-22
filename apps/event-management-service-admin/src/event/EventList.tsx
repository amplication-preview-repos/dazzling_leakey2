import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VENUE_TITLE_FIELD } from "../venue/VenueTitle";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="organizer" source="organizer" />
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="venue" source="venue.id" reference="Venue">
          <TextField source={VENUE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
