import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn 
} from "typeorm"
import { Type } from './Type';

@Entity()
export class Pet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    name!: string;

    @Column({
        nullable: true
    })
    description!: string;

    @Column({
        length: 30
    })
    color!: string;

    @Column({
        length: 10
    })
    size!: string;

    @Column()
    image!: string;

    @Column({
        length: 6
    })
    gender!: string;

    @ManyToOne((type) => Type, (type) => type.pets)
    type!: Type;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}