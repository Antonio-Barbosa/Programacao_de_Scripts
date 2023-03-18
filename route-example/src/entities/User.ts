import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false, unique: true })
    mail: string;

    @Column({ length: 100, nullable: false })
    passwoprd: string;

}

