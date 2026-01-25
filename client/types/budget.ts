export interface IBudget {
  _id: string;
  type: "expense" | "income";
  amount: number;
  explanation: string;
  createdAt: string;
  updatedAt: string;
}
