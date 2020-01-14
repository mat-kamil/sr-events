interface Event {
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

interface EventLocation {
  name: string;
  latitude: number;
  longitude: number;
}

interface EventComment {
  user: User;
  timestamp: string;
  message: string;
}

interface User {
  name: string;
  avatarUrl: string;
}
