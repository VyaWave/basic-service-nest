import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  // Unique,
} from 'typeorm';

// @Unique(['uniq_system_key'])
@Entity()
export class ExperienceSystemsEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  uniq_system_key: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  extra: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  system_name: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  system_origin: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  logo: string;

  @Column({
    length: 256,
    charset: 'utf8',
  })
  admins: string;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updateDate: string;
}
