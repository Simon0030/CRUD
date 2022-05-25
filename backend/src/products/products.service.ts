import { Injectable } from '@nestjs/common';
import { Product, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  async products(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async getProduct(id: string): Promise<Product | null> {
    const productId = parseInt(id);
    return this.prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: { auctionSites: true },
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: { auctionSites: true },
    });
  }

  async updateProduct(id: string, name: string): Promise<string | Product> {
    try {
      const productId = parseInt(id);
      const productName = name;
      return this.prisma.product.update({
        where: {
          id: productId,
        },
        data: {
          name: productName,
        },
      });
    } catch (error) {
      return `Error during updating product by id: ${id}`;
    }
  }

  async deleteProduct(id: string): Promise<string | Product> {
    try {
      const productId = parseInt(id);
      return await this.prisma.product.delete({
        where: {
          id: productId,
        },
      });
    } catch (error) {
      return `Error during deleting product by id: ${id}`;
    }
  }
}
