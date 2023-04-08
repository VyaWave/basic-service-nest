import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ExperienceOrderEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  uniq_system_key: string;

  @Column({ default: 1 })
  status: number;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  country: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  creator: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  content: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  title: string;

  @Column({
    default: 1,
  })
  feedback_type: number;

  @Column({
    default: 1,
  })
  message_type: number;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  process_users: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  files: string;

  @Column({ default: 1 })
  unread: number;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  extra: string;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  lang: string;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updateDate: string;
}
