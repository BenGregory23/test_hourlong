import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [GraphqlModule, PrismaModule, ProductModule, CompanyModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
