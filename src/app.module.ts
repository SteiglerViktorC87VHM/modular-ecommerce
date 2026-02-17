import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from './modules/store/store.module'; // vagy ahol a store module van
import { Store } from './modules/store/entities/store.entity';
import { CategoryModule } from './modules/category/category.module';
import { Category } from './modules/category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user', // amit a dockerben megadtál
      password: 'password', // amit a dockerben megadtál
      database: 'modular_ecommerce',
      entities: [Store, Category],
      synchronize: true, // fejlesztés alatt ez csinálja meg a táblákat
    }),
    StoreModule,
    CategoryModule,
  ],
})
export class AppModule {}