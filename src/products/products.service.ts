import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/createProductDto.dto';

import { Product } from './products.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    id = Number(id);
    const found = await this.productRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Product with ID: ${id} not found`);
    }
    return found;
  }

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }
}
