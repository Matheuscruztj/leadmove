import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { UserAddress } from './user-address.entity';
import { VideoSchedule } from './video-schedule.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ name: 'whatsapp_number', nullable: true })
  whatsappNumber: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.user)
  addresses: UserAddress[];

  @OneToMany(() => VideoSchedule, (videoSchedule) => videoSchedule.user)
  videoSchedules: VideoSchedule[];
}
