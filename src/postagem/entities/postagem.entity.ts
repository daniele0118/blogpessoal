import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagem"})
export class Postagem{

    @PrimaryGeneratedColumn()//Chave primária e auto_increment
    id: number;

    @Column({length: 100, nullable: false})
    titulo: string;

    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn()
    date: Date;

    
}