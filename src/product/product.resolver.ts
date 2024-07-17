import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product} from '@prisma/client';
import { ProductService } from './product.service.js';



@Resolver()
export class ProductResolver {
  constructor(private productService:ProductService) {}

  @Query('product')
  async getProduct(@Args('id') id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Mutation('createProduct')
  async createProduct(@Args() { name, price, companyId }: { name: string, price:number,companyId: number }): Promise<Product> {
    return this.productService.createProduct({  name, price, companyId });
  }
}
