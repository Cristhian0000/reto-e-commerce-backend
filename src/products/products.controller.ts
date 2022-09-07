import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDto } from './dto/createProductDto.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(AuthGuard())
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }
  @Get('/categories')
  getCategories(): Promise<String[]> {
    return this.productsService.getCategories();
  }
  @Get('/:id')
  getProductByID(@Param('id') id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Post('/create')
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }
}
