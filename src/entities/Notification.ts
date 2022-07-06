import { Entity, Column, PrimaryGeneratedColumn ,ManyToOne,JoinColumn,BaseEntity} from "typeorm"
import { User } from "./User"

@Entity()
export class Notification extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    userid!: string

    @Column()
    message!: string

    @ManyToOne(() => User, (nuser) => nuser.notifications)
    nuser!: User
}