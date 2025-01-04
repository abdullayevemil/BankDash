export interface Transaction {
  id: number;
  userId: number;
  name: string;
  date: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  cardNumber: string;
  iconUrl: string;
  type: string;
  iconBackground: string;
}
