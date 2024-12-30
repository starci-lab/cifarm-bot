import { Module } from '@nestjs/common';
import { CiFarmModule } from './cifarm';
import { CiWalletModule } from './ciwallet';

@Module({
  imports: [
    // CiFarmModule.forRoot(),
    CiWalletModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
