import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	name: string
	@Column()
	number: string
	@Column({ default: 0 })
	rating: number
	@Column({ default: 0 })
	reviewCount: number
	@Column({ default: '' })
	image: string
	@Column({ type: 'date' })
	createDate: string
	@Column({default: true})
	status: boolean
}
