import { AccountId } from 'backend/modules/shared';
import { Customer } from './customer';

export interface CustomerRepository {
  getList(accountId: AccountId): Customer[];
  create(input: Customer): Promise<void>;
}
