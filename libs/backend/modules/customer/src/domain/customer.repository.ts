import { Customer } from './customer';

export interface CustomerRepository {
  getList(): Customer[];
  create(input: Customer): Promise<void>;
}
