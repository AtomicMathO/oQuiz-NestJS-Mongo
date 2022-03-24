import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TagDto } from './dto/tag.dto';
import { TagService } from './tag.service';
import { Tag } from './schemas/tag.schema';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<Tag> {
    return this.tagService.findOne(id);
  }

  @Post()
  create(@Body() createTagDto: TagDto): Promise<Tag> {
    return this.tagService.create(createTagDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<Tag> {
    return this.tagService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateTagDto: TagDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<Tag> {
    return this.tagService.update(id, updateTagDto);
  }
}
