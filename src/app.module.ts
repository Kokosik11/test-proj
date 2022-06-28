import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { prismaConfigAsync } from 'src/prisma.config';

@Module({
  imports: [PrismaModule.forRootAsync(prismaConfigAsync)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
