import { AccountEntity } from "../entity/account-entity";

type AccountTypes = typeof AccountEntity["_typesOnly"];

export type AccountFacet = AccountTypes["_item"];
