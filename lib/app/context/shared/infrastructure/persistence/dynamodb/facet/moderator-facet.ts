import { ModeratorEntity } from "../entity/moderator-entity";

type ModeratorTypes = typeof ModeratorEntity["_typesOnly"];

export type ModeratorFacet = Omit<ModeratorTypes["_item"], "PK" | "SK">;
