import { schemaValidator } from "../../utils/schema-validator";

interface ValueObjectProps {
  [key: string]: any;
}

export abstract class ValueObject<
  T extends ValueObjectProps = { value: string }
> {
  protected props: T;
  abstract schema: Record<string, any>;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  protected validate(): void {
    schemaValidator(this.schema, this.props);
  }

  get props_() {
    return this.props;
  }
}
