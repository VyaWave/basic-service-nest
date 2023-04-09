import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ExperienceCommentsEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parent_id: number;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  creator: string;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  content: string;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  files: string;

  @Column({
    length: 256,
    charset: 'utf8',
    default: null,
  })
  extra: string;

  @Column({
    default: 1,
  })
  type: number;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updateDate: string;
}
