import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
class Forward extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String, { nullable: false })
  @Column({ type: 'varchar', nullable: false })
  at!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  external_failure?: string;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  fee?: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  fee_mtokens?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  in_channel?: string;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  in_payment?: number;

  @Field(() => String)
  @Column({ type: 'varchar', nullable: true })
  internal_failure?: string;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_confirmed!: boolean;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_failed!: boolean;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_receive!: boolean;

  @Field(() => Boolean)
  @Column({ type: 'boolean', nullable: false })
  is_send!: boolean;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'bigint', nullable: true })
  mtokens?: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  out_channel?: string;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  out_payment?: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  secret?: string;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  timeout?: number;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'bigint', nullable: true })
  tokens?: number;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}

export default Forward;
