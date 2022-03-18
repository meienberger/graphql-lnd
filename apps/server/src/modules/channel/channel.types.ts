/* eslint-disable max-lines */
/* eslint-disable max-classes-per-file */
import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
class PendingPayment {
  @Field(() => String)
  id!: string;

  @Field(() => String, { nullable: true })
  in_channel?: string;

  @Field(() => Number, { nullable: true })
  in_payment?: number;

  @Field(() => Boolean, { nullable: true })
  is_forward?: boolean;

  @Field(() => Boolean)
  is_outgoing!: boolean;

  @Field(() => String, { nullable: true })
  out_channel?: string;

  @Field(() => Number, { nullable: true })
  out_payment?: number;

  @Field(() => Number, { nullable: true })
  payment?: number;

  @Field(() => Number)
  timeout!: number;

  @Field(() => Number)
  tokens!: number;
}

@ObjectType()
class BaseChannel {
  @Field(() => Number)
  capacity!: number;

  @Field(() => String)
  partner_public_key!: string;

  @Field(() => String)
  transaction_id!: string;

  @Field(() => Number)
  transaction_vout!: number;
}

@ObjectType()
class OpenChannel extends BaseChannel {
  @Field(() => String)
  id!: string;

  @Field(() => Boolean)
  is_partner_initiated!: boolean;

  @Field(() => Number)
  commit_transaction_fee!: number;

  @Field(() => Number)
  commit_transaction_weight!: number;

  @Field(() => String, { nullable: true })
  cooperative_close_address?: string;

  @Field(() => Number, { nullable: true })
  cooperative_close_delay_height?: number;

  @Field(() => Boolean)
  is_active!: boolean;

  @Field(() => Boolean)
  is_closing!: boolean;

  @Field(() => Boolean)
  is_opening!: boolean;

  @Field(() => Boolean)
  is_private!: boolean;

  @Field(() => Number)
  local_balance!: number;

  @Field(() => Number, { nullable: true })
  local_csv?: number;

  @Field(() => Number, { nullable: true })
  local_dust?: number;

  @Field(() => Number, { nullable: true })
  local_given?: number;

  @Field(() => Number, { nullable: true })
  local_max_htlcs?: number;

  @Field(() => String, { nullable: true })
  local_max_pending_mtokens?: string;

  @Field(() => String, { nullable: true })
  local_min_htlc_mtokens?: string;

  @Field(() => Number)
  local_reserve!: number;

  @Field(() => Number)
  past_states!: number;

  @Field(() => [PendingPayment])
  pending_payments!: PendingPayment[];

  @Field(() => Number)
  received!: number;

  @Field(() => Number)
  remote_balance!: number;

  @Field(() => Number, { nullable: true })
  remote_csv?: number;

  @Field(() => Number, { nullable: true })
  remote_dust?: number;

  @Field(() => Number, { nullable: true })
  remote_given?: number;

  @Field(() => Number, { nullable: true })
  remote_max_htlcs?: number;

  @Field(() => String, { nullable: true })
  remote_max_pending_mtokens?: string;

  @Field(() => String, { nullable: true })
  remote_min_htlc_mtokens?: string;

  @Field(() => Number)
  remote_reserve!: number;

  @Field(() => Number)
  sent!: number;

  @Field(() => Number, { nullable: true })
  time_offline?: number;

  @Field(() => Number, { nullable: true })
  time_online?: number;

  @Field(() => Number)
  unsettled_balance!: number;
}

@ObjectType()
class ClosePayment {
  @Field(() => Boolean)
  is_outgoing!: boolean;

  @Field(() => Boolean)
  is_paid!: boolean;

  @Field(() => Boolean)
  is_pending!: boolean;

  @Field(() => Boolean)
  is_refunded!: boolean;

  @Field(() => String, { nullable: true })
  spent_by?: string;

  @Field(() => Number)
  tokens!: number;

  @Field(() => String)
  transaction_id!: string;

  @Field(() => Number)
  transaction_vout!: number;
}

@ObjectType()
class ClosedChannel extends BaseChannel {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Boolean, { nullable: true })
  is_partner_initiated?: boolean;

  @Field(() => String, { nullable: true })
  close_balance_spent_by?: string;

  @Field(() => Number, { nullable: true })
  close_balance_vout?: number;

  @Field(() => [ClosePayment])
  close_payments!: ClosePayment[];

  @Field(() => Number, { nullable: true })
  close_confirm_height?: number;

  @Field(() => String, { nullable: true })
  close_transaction_id?: string;

  @Field(() => Number)
  final_local_balance!: number;

  @Field(() => Number)
  final_time_locked_balance!: number;

  @Field(() => Boolean)
  is_breach_close!: boolean;

  @Field(() => Boolean)
  is_cooperative_close!: boolean;

  @Field(() => Boolean)
  is_funding_cancel!: boolean;

  @Field(() => Boolean)
  is_local_force_close!: boolean;

  @Field(() => Boolean, { nullable: true })
  is_partner_closed?: boolean;

  @Field(() => Boolean)
  is_remote_force_close!: boolean;
}

@ObjectType()
class ChannelPolicy {
  @Field(() => String, { nullable: true })
  base_fee_mtokens?: string;

  @Field(() => Number, { nullable: true })
  cltv_delta?: number;

  @Field(() => Number, { nullable: true })
  fee_rate?: number;

  @Field(() => Boolean, { nullable: true })
  is_disabled?: boolean;

  @Field(() => String, { nullable: true })
  max_htlc_mtokens?: string;

  @Field(() => String, { nullable: true })
  min_htlc_mtokens?: string;

  @Field(() => String)
  public_key!: string;

  @Field(() => String, { nullable: true })
  updated_at?: string;
}

@ObjectType()
class GetChannelResponse {
  @Field(() => Number)
  capacity!: number;

  @Field(() => String)
  id!: string;

  @Field(() => [ChannelPolicy])
  policies!: ChannelPolicy[];

  @Field(() => String)
  transaction_id!: string;

  @Field(() => Number)
  transaction_vout!: number;

  @Field(() => String, { nullable: true })
  updated_at?: string;
}

@InputType()
class OpenChannelInput {
  @Field(() => Number, { nullable: true })
  chain_fee_tokens_per_vbyte?: number;

  @Field(() => String, { nullable: true })
  cooperative_close_address?: string;

  @Field(() => Number, { nullable: true })
  give_tokens?: number;

  @Field(() => Boolean, { nullable: true })
  is_private?: boolean;

  @Field(() => Number)
  local_tokens!: number;

  @Field(() => Number, { nullable: true })
  min_confirmations?: number;

  @Field(() => String, { nullable: true })
  min_htlc_mtokens?: string;

  @Field(() => String)
  partner_public_key!: string;

  @Field(() => Number, { nullable: true })
  partner_csv_delay?: number;

  @Field(() => String, { nullable: true })
  partner_socket?: string;
}

@ObjectType()
class OpenChannelResponse {
  @Field(() => String)
  transaction_id!: string;

  @Field(() => Number)
  transaction_vout!: number;
}

@ObjectType()
class CloseChannelResponse {
  @Field(() => String)
  transaction_id!: string;

  @Field(() => Number)
  transaction_vout!: number;
}

@ObjectType()
class GetChannelsResponse {
  @Field(() => [OpenChannel])
  channels?: OpenChannel[];
}

@ObjectType()
class ClosedChannelsResponse {
  @Field(() => [ClosedChannel])
  channels!: ClosedChannel[];
}

export { GetChannelsResponse, GetChannelResponse, OpenChannelInput, OpenChannelResponse, CloseChannelResponse, ClosedChannelsResponse };
