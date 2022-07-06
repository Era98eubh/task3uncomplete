import { Entity, Column, PrimaryGeneratedColumn, OneToMany,BaseEntity,  JoinColumn} from "typeorm"
import { Issue } from "./Issue"
import { Notification } from "./Notification"


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @Column()
    password!: string

    @Column({default:false})
    havingissue!: Boolean

    @OneToMany(() => Notification, (notification) => notification.nuser) 
    notifications!: Notification[]

    @OneToMany(() => Issue, (issue) => issue.nuser) 
    issues!: Issue[]

 
}