import { RegistrationCreateNestedManyWithoutEventsInput } from "./RegistrationCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  organizer?: string | null;
  registrations?: RegistrationCreateNestedManyWithoutEventsInput;
  startDate?: Date | null;
  venue?: VenueWhereUniqueInput | null;
};
