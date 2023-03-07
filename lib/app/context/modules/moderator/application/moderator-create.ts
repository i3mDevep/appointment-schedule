import { ModeratorRepository } from "../domain/moderator.repository";
import { Moderator, ModeratorProps } from "../domain/moderator.root";

export function moderatorCreateApplication(repository: ModeratorRepository) {
  return async (props: ModeratorProps) => {
    const instance = Moderator.create(props);
    await repository.create(instance);
    return instance;
  };
}
