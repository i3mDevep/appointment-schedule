import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { CustomerType } from 'backend/modules/shared';
import { AppointmentPrimitives } from '../../domain';

@ObjectType()
export class AppointmentModel implements AppointmentPrimitives {
  @Field()
  id: string;

  @Field()
  moderatorId: string;

  @Field()
  customer: CustomerType;

  @Field()
  accountId: string;

  @Field()
  status: string;

  @Field(() => GraphQLISODateTime)
  dateCreated: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateUpdate?: Date;

  @Field(() => GraphQLISODateTime)
  dateMeeting: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateFinish?: Date;
}
