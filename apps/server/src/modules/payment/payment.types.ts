/* eslint-disable max-classes-per-file */
import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
class Hop {
  @Field(() => String)
  channel!: string;

  @Field(() => String)
  public_key!: string;
}

@ObjectType()
class RebalanceResponse {
  @Field(() => String)
  id!: string;
}

export { RebalanceResponse, Hop };
