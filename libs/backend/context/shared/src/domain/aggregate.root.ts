export abstract class AggregateRoot<P> {
  abstract toPrimitives(): P;
  static fromPrimitives: unknown;
}
