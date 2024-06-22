import { RegistrationUpdateManyWithoutEventsInput } from "./RegistrationUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  organizer?: string | null;
  registrations?: RegistrationUpdateManyWithoutEventsInput;
  startDate?: Date | null;
  venue?: VenueWhereUniqueInput | null;
};
