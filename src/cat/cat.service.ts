import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @Inject('CatRepository')
    private catRepository: Repository<Cat>,
  ) {}

  create(createCatDto: CreateCatDto) {
    return this.catRepository.save(createCatDto);
  }

  findAll() {
    return this.catRepository.find();
  }

  findOne(id: number) {
    return this.catRepository.findOne({ where: { id } });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catRepository.update(id, updateCatDto);
  }

  remove(id: number) {
    return this.catRepository.delete(id);
  }
}
