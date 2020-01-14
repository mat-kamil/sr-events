export interface Event {
  id: number;
  time: string;
  title: string;
  creator: User;
  guests: User[];
  // @ts-ignore
  type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES';
  location: EventLocation;
  comments: EventComment[];
}

export interface EventSearchQuery {
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface EventLocation {
  name: string;
  latitude: number;
  longitude: number;
}

export interface EventComment {
  user: User;
  timestamp: string;
  message: string;
}

export interface User {
  name: string;
  avatarUrl: string;
}
