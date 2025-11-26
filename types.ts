export enum ActivityType {
  Transport = 'Transport',
  Sightseeing = 'Sightseeing',
  Food = 'Food',
  Activity = 'Activity',
  Shopping = 'Shopping',
  Hotel = 'Hotel'
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  location: string;
  locationUrl: string; // Google Maps URL
  type: ActivityType;
  details?: {
    bookingRef?: string;
    notes?: string;
    imageUrl?: string; // For modal verification screenshots
  };
}

export interface DaySchedule {
  date: string;
  dayLabel: string; // e.g., "Day 1"
  shortDate: string; // e.g., "12/03"
  items: ItineraryItem[];
}