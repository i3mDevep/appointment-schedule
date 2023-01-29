export abstract class AggregateRoot<P> {
  abstract toPrimitives(): P;
  private static fromPrimitives: <P, D>(primitives: P) => D;
}
