import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProduct(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async createProduct(data: { name: string; price: number, companyId: number}) {
    return this.prisma.product.create({ data });
  }
}