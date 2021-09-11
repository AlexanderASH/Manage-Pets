import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn 
} from "typeorm";
import { Pet } from './Pet';

@Entity()
export class Type extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 50
    })
    name!: string;
    
    @OneToMany((type) => Pet, (pet) => pet.type)
    pets!: Pet[];

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}