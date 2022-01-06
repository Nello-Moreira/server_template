/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('examples')
export default class Example {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		username: string;

	@Column()
		email: string;
}
