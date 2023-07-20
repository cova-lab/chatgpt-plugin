import { Module } from '@nestjs/common';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [ChatgptModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
