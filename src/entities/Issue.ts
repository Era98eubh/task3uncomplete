import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,BaseEntity } from "typeorm"
import { Counter } from "./Counter"
import { User } from "./User"

@Entity()
export class Issue extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    name!: string

    @Column()
    tel!: number

    @Column()
    email!: string

    @Column("text")
    issue!: string

    @Column()
    queue_num!: number

    @Column({default:false})
    issueCalled!: Boolean

    @Column({default:false})
    issueDone!: Boolean

    @ManyToOne(() => User, (nuser) => nuser.issues)
    nuser!: User

    @ManyToOne(() => Counter, (counter) => counter.issues)
    counter!: Counter



   
}