import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryId: number;

    @Column()
    documentType: string;

    @Column()
    firstAttribute: string | null;

    @Column()
    secondAttribute: string | null;

    @Column()
    mark: boolean;
}