import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductsEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;
}
