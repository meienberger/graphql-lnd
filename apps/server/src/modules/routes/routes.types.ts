/* eslint-disable max-classes-per-file */
import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
class Hop {
  @Field(() => String)
  channel!: string;

  @Field(() => Number)
  channel_capacity!: number;

  @Field(() => Number)
  fee!: number;

  @Field(() => String)
  fee_mtokens!: string;

  @Field(() => Number)
  forward!: number;

  @Field(() => String, { nullable: true })
  forward_mtokens?: string;

  @Field(() => String)
  public_key!: string;

  @Field(() => Number)
  timeout!: number;
}

@ObjectType()
class Message {
  @Field(() => String)
  type!: string;

  @Field(() => String)
  value!: string;
}

@ObjectType()
class RouteThroughHopsResponse {
  @Field(() => Number)
  fee!: number;

  @Field(() => String)
  fee_mtokens!: string;

  @Field(() => [Hop])
  hops?: Hop[];

  @Field(() => [Message], { nullable: true })
  messages?: Message[];

  @Field(() => String, { nullable: true })
  payment?: string;

  @Field(() => Number)
  safe_fee!: number;

  @Field(() => Number)
  safe_tokens!: number;

  @Field(() => Number)
  timeout!: number;

  @Field(() => Number)
  tokens!: number;

  @Field(() => String, { nullable: true })
  total_mtokens?: string;
}

@InputType()
class GetRouteThroughHopsInput {
  @Field(() => Number, { nullable: true })
  tokens?: number;

  @Field(() => [String], { nullable: true })
  public_keys!: string[];

  @Field(() => String, { nullable: true })
  outgoing_channel?: string;
}

@ObjectType()
class GetRouteToDestinationResponse {
  @Field(() => Number, { nullable: true })
  confidence?: number;

  @Field(() => Number)
  fee!: number;

  @Field(() => String)
  fee_mtokens!: string;

  @Field(() => [Hop])
  hops!: Hop[];

  @Field(() => [Message], { nullable: true })
  messages?: Message[];

  @Field(() => String, { nullable: true })
  payment?: string;

  @Field(() => Number)
  safe_fee!: number;

  @Field(() => Number)
  safe_tokens!: number;

  @Field(() => Number)
  timeout!: number;

  @Field(() => Number)
  tokens!: number;
}

@InputType()
class GetRouteToDestinationInput {
  @Field(() => String)
  destination!: string;

  @Field(() => Number, { nullable: true })
  tokens?: number;

  @Field(() => String, { nullable: true })
  outgoing_channel?: string;
}

@ObjectType()
class HopInPath {
  @Field(() => String)
  base_fee_mtokens!: string;

  @Field(() => String)
  channel!: string;

  @Field(() => Number)
  channel_capacity!: number;

  @Field(() => Number)
  cltv_delta!: number;

  @Field(() => Number)
  fee_rate!: number;

  @Field(() => String)
  public_key!: string;
}

@ObjectType()
class GetPossiblePathsResult {
  @Field(() => [HopInPath])
  hops!: HopInPath[];
}

export { RouteThroughHopsResponse, GetRouteThroughHopsInput, GetRouteToDestinationResponse, GetRouteToDestinationInput, GetPossiblePathsResult };
