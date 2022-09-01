import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmExModule } from 'src/db/type-orm-ex.module';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([ProductRepository]),
    AuthModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
