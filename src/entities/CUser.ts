import { Entity, Column, PrimaryGeneratedColumn ,OneToMany,BaseEntity} from "typeorm"
import { Counter } from "./Counter"


@Entity()
export class Cuser extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @Column()
    password!: string

    @OneToMany(() => Counter, (counter) => counter.cuser) 
    counters!: Counter[]



}