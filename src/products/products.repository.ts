import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { MongoRepository } from 'typeorm';

import { CreateProductDto } from './dto/createProductDto.dto';
import { Product } from './products.entity';

@CustomRepository(Product)
export class ProductRepository extends MongoRepository<Product> {
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.create(createProductDto);
    await this.save(product);
    return product;
  }
}
