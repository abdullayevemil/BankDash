export interface CreditCard {
  id: number;
  userId: number;
  holder: string;
  validThru: string;
  number: string;
  balance: number;
  theme: "whiteCard" | "darkCard" | "lightBlueCard";
}
