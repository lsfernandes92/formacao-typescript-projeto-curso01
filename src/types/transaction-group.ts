import { Transaction } from "./transaction.js"

export type TransactionGroup = {
  label: string,
  transactions: Transaction[]
}