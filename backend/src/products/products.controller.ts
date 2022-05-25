import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Product, Prisma } from '@prisma/client'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() body: Prisma.ProductCreateInput) {
    return this.productService.createProduct(body);
  }

  @Get(':id')
  getProductId(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Put(':id')
  update( @Param('id') id: string, @Body() body: Prisma.ProductCreateInput) {

    return this.productService.updateProduct(id, body.name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
