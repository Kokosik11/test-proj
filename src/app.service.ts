import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello(): Promise<number> {
    const data: Prisma.UserCreateInput = { idd: 1 };
    const i = await this.prisma.user.create({
      data,
    });
    return i.id;
  }
}
