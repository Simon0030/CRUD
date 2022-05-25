import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuctionSite, Prisma } from '@prisma/client';
@Injectable()
export class AuctionSiteService {
  constructor(private prisma: PrismaService) {}

  async auctionSite(
    auctionSiteWhereUniqueInput: Prisma.AuctionSiteWhereUniqueInput,
  ): Promise<AuctionSite | null> {
    return this.prisma.auctionSite.findUnique({
      where: auctionSiteWhereUniqueInput,
    });
  }

  async auctionSites(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AuctionSiteWhereUniqueInput;
    where?: Prisma.AuctionSiteWhereInput;
    orderBy?: Prisma.AuctionSiteOrderByWithRelationInput;
  }): Promise<AuctionSite[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.auctionSite.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAuctionSite(
    data: Prisma.AuctionSiteCreateInput,
  ): Promise<AuctionSite> {
    return this.prisma.auctionSite.create({
      data,
    });
  }

  async getAuctionSite(id: string): Promise<AuctionSite | null> {
    const auctionSiteId = parseInt(id);
    return this.prisma.auctionSite.findUnique({
      where: {
        id: auctionSiteId,
      },
      include: { products: true },
    });
  }

  async getAllAuctionSites(): Promise<AuctionSite[]> {
    return this.prisma.auctionSite.findMany({
      include: { products: true },
    });
  }

  async updateAuctionSite(
    id: string,
    data: Prisma.AuctionSiteCreateInput,
  ): Promise<string | AuctionSite> {
    try {
      const auctionSiteId = parseInt(id);
      return this.prisma.auctionSite.update({
        where: {
          id: auctionSiteId,
        },
        data,
      });
    } catch (error) {
      return `Error during updating product by id: ${id}`;
    }
  }

  async deleteAuctionSite(id: string): Promise<string | AuctionSite> {
    try {
      const AuctionSiteId = parseInt(id);
      return await this.prisma.auctionSite.delete({
        where: {
          id: AuctionSiteId,
        },
      });
    } catch (error) {
      return `Error during deleting auctionSite by id: ${id}`;
    }
  }
}
