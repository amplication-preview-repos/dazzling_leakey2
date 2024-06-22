import { Event } from "../event/Event";

export type Venue = {
  capacity: number | null;
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
