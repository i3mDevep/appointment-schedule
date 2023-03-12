import { ModeratorFacet } from "../../../../shared/infrastructure/persistence/dynamodb/facet/moderator-facet";
import { ModeratorPrimitives } from "../../domain/moderator.root";

export const dtoDataToPrimitives = (
  face: ModeratorFacet
): ModeratorPrimitives => ({
  ...face,
  accountId: face.account as string,
});
