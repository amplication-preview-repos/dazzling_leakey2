import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RegistrationListRelationFilter } from "../registration/RegistrationListRelationFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  organizer?: StringNullableFilter;
  registrations?: RegistrationListRelationFilter;
  startDate?: DateTimeNullableFilter;
  venue?: VenueWhereUniqueInput;
};
