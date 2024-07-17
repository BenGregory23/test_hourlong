import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Global makes it easier to use PrismaModule's exports in other modules
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
