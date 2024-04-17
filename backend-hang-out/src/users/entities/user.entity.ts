import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
    id!:number;

    @Index({unique:true})
    @Column()
    mail:string;

    @Column({length:100})
    name: string;

    @Column({length:100})
    firstName: string;

    @Column()
    password: string;

    @Column({default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}
