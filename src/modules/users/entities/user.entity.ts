import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @VersionColumn()
  version: string;

  // @OneToMany((type) => Photo, (photo) => photo.user)
  // photos: Photo[];
}
