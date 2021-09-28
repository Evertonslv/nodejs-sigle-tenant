import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
