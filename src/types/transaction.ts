import { TransactionType } from "./transaction-type.js";

export type Transaction = {
  type: TransactionType,
  value: number,
  date: Date,
}