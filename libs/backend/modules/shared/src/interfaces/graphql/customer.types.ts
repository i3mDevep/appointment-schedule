import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerType {
  @Field()
  id: string;

  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  sessionId: string;
}
