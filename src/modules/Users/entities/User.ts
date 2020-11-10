import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Orphanage from '../entities/User';

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

  @OneToMany(() => Orphanage, orphanage => orphanage.user, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'user_id' })
  readonly orphanages: Orphanage[];
}

export default User;
