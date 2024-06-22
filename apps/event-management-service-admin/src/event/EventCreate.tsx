import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RegistrationTitle } from "../registration/RegistrationTitle";
import { VenueTitle } from "../venue/VenueTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="name" source="name" />
        <TextInput label="organizer" source="organizer" />
        <ReferenceArrayInput
          source="registrations"
          reference="Registration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegistrationTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="startDate" source="startDate" />
        <ReferenceInput source="venue.id" reference="Venue" label="venue">
          <SelectInput optionText={VenueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
