import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerModel {
  @Field()
  id: string;

  @Field()
  fullName: string;
}
