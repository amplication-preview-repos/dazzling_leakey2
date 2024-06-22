import { EventUpdateManyWithoutVenuesInput } from "./EventUpdateManyWithoutVenuesInput";

export type VenueUpdateInput = {
  capacity?: number | null;
  events?: EventUpdateManyWithoutVenuesInput;
  location?: string | null;
  name?: string | null;
};
