declare module 'ln-pathfinding' {
  interface Hop {
    public_key: string;
    channel: string;
    channel_capacity: number;
    fee_rate: number;
    cltv_delta: number;
    base_fee_mtokens: string;
  }

  interface Path {
    fee: number;
    fee_mtokens: string;
    hops: Hop[];
    messages: Message[];
    payment: string;
    safe_fee: number;
    safe_tokens: number;
  }

  interface Message {
    type: string;
    value: string;
  }

  interface Channel {
    capacity: number;
    id: string;
    policies: {
      base_fee_mtokens?: string | undefined;
      cltv_delta?: number | undefined;
      fee_rate?: number | undefined;
      is_disabled?: boolean | undefined;
      max_htlc_mtokens?: string | undefined;
      min_htlc_mtokens?: string | undefined;
      public_key: string;
      updated_at?: string | undefined;
    }[];
    transaction_id: string;
    transaction_vout: number;
    updated_at?: string | undefined;
  }

  export function calculatePaths(options: { channels: Channel[]; end: string; start: string; mtokens: number }): {
    paths: Path[];
  };
}
