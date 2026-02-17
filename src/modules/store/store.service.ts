import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>, // A TypeORM "keze", amivel eléri a táblát
  ) {}

  // Létrehozás logika
  async create(name: string, slug: string) {
    const newStore = this.storeRepository.create({ name, slug, config: {} });
    return await this.storeRepository.save(newStore);
  }

  // Listázás logika
  async findAll() {
    return await this.storeRepository.find();
  }
}
