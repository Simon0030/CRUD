import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuctionSiteService } from './auctionSite.service';
import { AuctionSiteController } from './auctionSite.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AuctionSiteController],
  providers: [AuctionSiteService],
  exports: [AuctionSiteService],
})
export class AuctionSiteModule {}
