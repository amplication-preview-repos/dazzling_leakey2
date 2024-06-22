import { EventCreateNestedManyWithoutVenuesInput } from "./EventCreateNestedManyWithoutVenuesInput";

export type VenueCreateInput = {
  capacity?: number | null;
  events?: EventCreateNestedManyWithoutVenuesInput;
  location?: string | null;
  name?: string | null;
};
