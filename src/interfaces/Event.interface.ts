export interface IEvent {
  uid: string;
  eventName: string;
  eventDescription: string | null;
  eventCategory: number;
  eventDate: Date | null;
  bannerURL: string;
  allowed: boolean;
}