import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store') // Ez nyitja meg a http://localhost:3000/store útvonalat
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post() // Itt küldjük be az adatokat
  create(@Body() body: { name: string, slug: string }) {
    return this.storeService.create(body.name, body.slug);
  }

  @Get() // Itt kérjük le a listát
  findAll() {
    return this.storeService.findAll();
  }
}
