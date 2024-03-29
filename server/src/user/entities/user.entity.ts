import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	name: string
	@Column()
	phone: string
	@Column()
	password: string
	@Column({ default: 0 })
	rating: number
	@Column({ default: 0 })
	reviewCount: number
	@Column({ default: '' })
	image: string
	@Column({ default: true })
	status: boolean
	@CreateDateColumn()
	createAt: string
}
