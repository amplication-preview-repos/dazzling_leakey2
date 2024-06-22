import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizer?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  venueId?: SortOrder;
};
