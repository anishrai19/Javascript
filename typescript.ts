interface Irooms {
  floor: number;
  rooms: number;
  bathrooms: number;
}
type rooms = Irooms[];

const detail: rooms = [
  { floor: 2, rooms: 4, bathrooms: 2 },
  { floor: 3, rooms: 4, bathrooms: 3 },
];
