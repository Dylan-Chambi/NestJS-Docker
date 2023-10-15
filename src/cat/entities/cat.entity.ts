/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 1 })
    id: number;

    @Column('text')
    @ApiProperty({ example: 'Kitty' })
    name: string;

    @Column('int')
    @ApiProperty({ example: 4 })
    age: number;

    @Column('text')
    @ApiProperty({ example: 'Persian' })
    breed: string;

}