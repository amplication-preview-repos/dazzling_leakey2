import { Registration } from "../registration/Registration";
import { Venue } from "../venue/Venue";

export type Event = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  organizer: string | null;
  registrations?: Array<Registration>;
  startDate: Date | null;
  updatedAt: Date;
  venue?: Venue | null;
};
