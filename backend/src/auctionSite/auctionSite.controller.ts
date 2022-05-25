import { AuctionSiteService } from './auctionSite.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AuctionSite, Prisma } from '@prisma/client';


export interface AuctionSitesBody {
  auctionSiteName: string
  productName: string
}

@Controller('auctionsites')
export class AuctionSiteController {
  constructor(private readonly auctionSiteService: AuctionSiteService) {}

  @Post()
  create(@Body() body: Prisma.AuctionSiteCreateInput) {
    return this.auctionSiteService.createAuctionSite(body);
  }

  @Get(':id')
  getAuctionSiteById(@Param('id') id: string) {
    return this.auctionSiteService.getAuctionSite(id);
  }

  @Get()
  getAllAuctionSites(): Promise<AuctionSite[]> {
    return this.auctionSiteService.getAllAuctionSites();
  }

  @Put(':id')
  update( @Param('id') id: string, @Body() body: Prisma.AuctionSiteCreateInput) {

    return this.auctionSiteService.updateAuctionSite(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionSiteService.deleteAuctionSite(id);
  }
}