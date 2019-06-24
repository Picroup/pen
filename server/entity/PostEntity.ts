import { Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number
}