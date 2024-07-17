import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async getProduct(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  async createProduct(data: { name: string}) {
    return this.prisma.company.create({ data });
  }
}