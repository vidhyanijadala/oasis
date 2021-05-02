import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Repo from "./Repo";
import Post from "./Post";

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  avatar: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  banner: string;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  bio: string;

  @Column()
  @Field()
  createdAt: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  github: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  url: string;

  @Column()
  @Field()
  verified: boolean;

  @Field(() => [Repo], { nullable: true })
  @OneToMany(() => Repo, (repo) => repo.owner)
  repos: Repo[];

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @Column("simple-array")
  @Field(() => [String])
  badges: string[];
}