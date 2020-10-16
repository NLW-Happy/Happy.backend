import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  readonly id: string;

  @Column()
  readonly name: string;

  @Column()
  readonly avatar: string;

  @Column()
  readonly email: string;

  @Column()
  readonly password: string;

  @Column()
  readonly bio: string;

  @CreateDateColumn()
  readonly created_at: Date;

  @UpdateDateColumn()
  readonly updated_at: Date;
}

export default User;
