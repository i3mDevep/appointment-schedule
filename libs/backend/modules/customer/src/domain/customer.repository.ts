import { Customer } from './customer';

export interface CustomerRepository {
  getList(): Customer[];
}
