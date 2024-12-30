import { Module } from '@nestjs/common';
import { CiFarmModule } from './cifarm/cifarm.module';

@Module({
  imports: [CiFarmModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
