import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiAcceptedResponse, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cat } from './entities/cat.entity';

@Controller('cat')
@ApiTags('Cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @ApiOperation({ summary: 'Create a cat' })
  @ApiResponse({ status: 200, description: 'Create a cat.', type: Cat })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Kitty',
        },
        age: {
          type: 'number',
          example: 4,
        },
        breed: {
          type: 'string',
          example: 'Persian',
        },
      },
    },
  })
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cats!!' })
  @ApiResponse({ status: 200, description: 'Return all cats.', type: [Cat] })
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cat by id' })
  @ApiResponse({ status: 200, description: 'Return a cat by id.', type: Cat })
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a cat by id' })
  @ApiResponse({ status: 200, description: 'Update a cat by id.', type: Cat })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Kitty',
        },
        age: {
          type: 'number',
          example: 4,
        },
        breed: {
          type: 'string',
          example: 'Persian',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cat by id' })
  @ApiResponse({ status: 200, description: 'Delete a cat by id.', type: Cat })
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
