import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Document } from './document.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    attribute: string | null;

    @Column()
    mark: boolean;

    @OneToMany(type => Document, document => document.categoryId)
    documents: Document[];
}