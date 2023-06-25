export interface Notes {
  status: boolean;
  date: TimestampData;
  note: string;
}

export interface TimestampData {
  nanoseconds: number;
  seconds: number;
}
