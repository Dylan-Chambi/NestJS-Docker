/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateCatDto } from './create-cat.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;

}
