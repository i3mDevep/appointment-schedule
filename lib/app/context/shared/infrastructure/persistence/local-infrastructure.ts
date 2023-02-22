import { Entity } from "../../domain/entity/entity";

export class LocalPersistence<D> {
  private db: Map<string, Map<string, any>> = new Map();
  private table_: string;

  constructor(table: string) {
    this.table_ = table;
    this.db.set(table, new Map());
  }

  create<P extends Entity<D>>(props: P) {
    this.collection.set(props.id.value, props);
    console.log(this.db);
    return Promise.resolve();
  }

  findByAccount(account: string) {
    return Promise.resolve([]);
  }

  get collection() {
    return this.db.get(this.table_) || new Map();
  }
}
