import { ModeratorRepository } from "../domain/moderator.repository";
import { Moderator, ModeratorPrimitives } from "../domain/moderator.root";

export function moderatorCreateApplication(repository: ModeratorRepository) {
  return async (props: ModeratorPrimitives) => {
    const instance = Moderator.create(props);
    await repository.create(instance);
    return instance;
  };
}
