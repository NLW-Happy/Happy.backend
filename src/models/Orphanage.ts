import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
class Orphanage {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  readonly name: string;

  @Column()
  readonly latitude: number;

  @Column()
  readonly longitude: number;

  @Column()
  readonly about: string;

  @Column()
  readonly instructions: string;

  @Column()
  readonly opening_hours: string;

  @Column()
  readonly open_on_weekends: boolean;

  @CreateDateColumn()
  readonly created_at: Date;

  @UpdateDateColumn()
  readonly updated_at: Date;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}

export default Orphanage;
