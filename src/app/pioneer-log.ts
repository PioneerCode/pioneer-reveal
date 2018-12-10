export class LogEntry {
  Timestamp: Date;
  Product: string;
  Layer: string;
  Location: string;
  UserId: string;
  UserName: string;
  Message: string;
  CorrelationId: string;
  ElapsedMilliseconds: number;
  AdditionalInfo: any;
}
