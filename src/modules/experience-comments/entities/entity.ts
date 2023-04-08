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
  })
  creator: string;
  content: string;
  files: string;
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
